(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/constants/index.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "APP_NAME": (()=>APP_NAME),
    "CATEGORIES": (()=>CATEGORIES),
    "DEFAULT_CURRENCY": (()=>DEFAULT_CURRENCY),
    "HEROSECTION_BG_IMAGE": (()=>HEROSECTION_BG_IMAGE),
    "HOUSE": (()=>HOUSE),
    "PROPERTYLISTINGSAMPLE": (()=>PROPERTYLISTINGSAMPLE),
    "UI_TEXT": (()=>UI_TEXT)
});
const API_URL = 'https://api.example.com/listings';
const APP_NAME = 'ALX Listing App';
const DEFAULT_CURRENCY = 'USD';
const UI_TEXT = {
    BOOK_NOW: 'Book Now',
    DETAILS: 'View Details',
    LOADING: 'Loading...'
};
const HEROSECTION_BG_IMAGE = '/assets/images/homepage_background1.png';
const HOUSE = '/assets/images/house.png';
const PROPERTYLISTINGSAMPLE = [
    {
        name: "Villa Ocean Breeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.89,
        category: [
            "Luxury Villa",
            "Pool",
            "Free Parking"
        ],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 2.png",
            "/assets/images/image 6.png",
            "/assets/images/image 7.png",
            "/assets/images/image 12.png"
        ],
        discount: "",
        description: "Experience luxury at Villa Ocean Breeze, a stunning beachfront property in Seminyak. Enjoy a private pool, spacious living areas, and breathtaking ocean views, perfect for a relaxing tropical getaway.",
        reviews: [
            {
                name: "Alice Johnson",
                avatar: "/assets/avatars/alice.jpg",
                rating: 5,
                comment: "An incredible stay! The villa is beautiful, and the staff were so attentive."
            },
            {
                name: "Mark Lee",
                avatar: "/assets/avatars/mark.jpg",
                rating: 4.8,
                comment: "Loved the pool and location. Highly recommend for a luxurious escape."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Mountain Escape Chalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA"
        },
        rating: 4.70,
        category: [
            "Mountain View",
            "Fireplace",
            "Self Checkin"
        ],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: [
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 11.png",
            "/assets/images/image 17.png"
        ],
        discount: "30",
        description: "Nestled in the heart of Aspen, this cozy chalet offers stunning mountain views and a warm fireplace, ideal for a winter retreat or summer adventure.",
        reviews: [
            {
                name: "Sarah Brown",
                avatar: "/assets/avatars/sarah.jpg",
                rating: 4.5,
                comment: "The chalet was cozy and perfect for our family ski trip."
            },
            {
                name: "David Kim",
                avatar: "/assets/avatars/david.jpg",
                rating: 4.9,
                comment: "Great location and amenities. The fireplace was a highlight!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: [
            "Desert View",
            "Pet Friendly",
            "Self Checkin"
        ],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: [
            "/assets/images/image 4.png",
            "/assets/images/image 9.png",
            "/assets/images/image 15.png"
        ],
        discount: "",
        description: "A charming retreat in Palm Springs, surrounded by desert landscapes. Perfect for couples or small families, with pet-friendly accommodations and modern amenities.",
        reviews: [
            {
                name: "Emma Davis",
                avatar: "/assets/avatars/emma.jpg",
                rating: 5,
                comment: "Loved the desert vibes and pet-friendly policy!"
            },
            {
                name: "Liam Wilson",
                avatar: "/assets/avatars/liam.jpg",
                rating: 4.8,
                comment: "Very clean and comfortable. Great for a weekend getaway."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: [
            "City View",
            "Free WiFi",
            "24h Checkin"
        ],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: [
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 15.png",
            "/assets/images/image 18.png"
        ],
        discount: "15",
        description: "Live the high life in this luxurious penthouse in the heart of NYC, offering panoramic city views and modern amenities for an unforgettable urban experience.",
        reviews: [
            {
                name: "Olivia Martinez",
                avatar: "/assets/avatars/olivia.jpg",
                rating: 4.9,
                comment: "The view was spectacular! Perfect for a city getaway."
            },
            {
                name: "James Taylor",
                avatar: "/assets/avatars/james.jpg",
                rating: 4.7,
                comment: "Very stylish and convenient location. Loved it!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: [
            "Riverside",
            "Private Dock",
            "Free Kayaks"
        ],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 6.png",
            "/assets/images/image 2.png",
            "/assets/images/image 12.png"
        ],
        discount: "20",
        description: "A serene riverside cabin in Queenstown, offering a private dock and free kayaks for exploring the stunning waterways of Otago.",
        reviews: [
            {
                name: "Sophie Clark",
                avatar: "/assets/avatars/sophie.jpg",
                rating: 4.8,
                comment: "Kayaking was amazing! The cabin is cozy and peaceful."
            },
            {
                name: "Ethan Walker",
                avatar: "/assets/avatars/ethan.jpg",
                rating: 4.7,
                comment: "Perfect for nature lovers. Highly recommend!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: [
            "Beachfront",
            "Private Pool",
            "Chef Service"
        ],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: [
            "/assets/images/image 7.png",
            "/assets/images/image 2.png",
            "/assets/images/image 13.png",
            "/assets/images/image 6.png"
        ],
        discount: "",
        description: "Indulge in luxury at this modern beachfront villa in Sidemen, complete with a private pool and optional chef service for an exquisite dining experience.",
        reviews: [
            {
                name: "Isabella Nguyen",
                avatar: "/assets/avatars/isabella.jpg",
                rating: 5,
                comment: "The chef service was a game-changer! Stunning villa."
            },
            {
                name: "Lucas Brown",
                avatar: "/assets/avatars/lucas.jpg",
                rating: 4.9,
                comment: "Perfect for a large group. The beach access was fantastic."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: [
            "Lakeside",
            "Mountain View",
            "Hiking Trails"
        ],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: [
            "/assets/images/image 8.png",
            "/assets/images/image 3.png",
            "/assets/images/image 11.png",
            "/assets/images/image 17.png"
        ],
        discount: "10",
        description: "A cozy lakeside chalet in Banff, surrounded by mountains and hiking trails, perfect for outdoor enthusiasts seeking a tranquil retreat.",
        reviews: [
            {
                name: "Mia Thompson",
                avatar: "/assets/avatars/mia.jpg",
                rating: 4.6,
                comment: "The lake views were breathtaking. Great hiking nearby."
            },
            {
                name: "Noah Lee",
                avatar: "/assets/avatars/noah.jpg",
                rating: 4.7,
                comment: "Very comfortable and great location for exploring Banff."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: [
            "Garden",
            "Free Parking",
            "Self Checkin"
        ],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: [
            "/assets/images/image 9.png",
            "/assets/images/image 4.png",
            "/assets/images/image 13.png"
        ],
        discount: "25",
        description: "Relax in this tropical garden villa in Koh Samui, featuring lush surroundings, free parking, and easy self-check-in for a hassle-free stay.",
        reviews: [
            {
                name: "Ava Garcia",
                avatar: "/assets/avatars/ava.jpg",
                rating: 4.9,
                comment: "The garden was beautiful, and the villa was very spacious."
            },
            {
                name: "William Chen",
                avatar: "/assets/avatars/william.jpg",
                rating: 4.7,
                comment: "Loved the tropical vibe and easy check-in process."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: [
            "City Center",
            "Free WiFi",
            "24h Checkin"
        ],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: [
            "/assets/images/image 10.png",
            "/assets/images/image 5.png",
            "/assets/images/image 15.png",
            "/assets/images/image 18.png"
        ],
        discount: "",
        description: "A stylish urban loft in the heart of Berlin, offering free WiFi and 24-hour check-in, perfect for city explorers.",
        reviews: [
            {
                name: "Charlotte Kim",
                avatar: "/assets/avatars/charlotte.jpg",
                rating: 4.5,
                comment: "Great location and modern design. Perfect for a city trip."
            },
            {
                name: "Henry Patel",
                avatar: "/assets/avatars/henry.jpg",
                rating: 4.7,
                comment: "Very convenient and stylish. Loved the WiFi speed!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: [
            "Secluded",
            "Hot Tub",
            "Self Checkin"
        ],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: [
            "/assets/images/image 11.png",
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 17.png"
        ],
        discount: "40",
        description: "Escape to this secluded forest cabin in Whistler, complete with a hot tub and self-check-in for a peaceful retreat in nature.",
        reviews: [
            {
                name: "Amelia Wright",
                avatar: "/assets/avatars/amelia.jpg",
                rating: 4.8,
                comment: "The hot tub was amazing! Perfect for a quiet getaway."
            },
            {
                name: "Jack Liu",
                avatar: "/assets/avatars/jack.jpg",
                rating: 4.6,
                comment: "Very secluded and relaxing. Great for families."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: [
            "Cliffside",
            "Infinity Pool",
            "Sea View"
        ],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 12.png",
            "/assets/images/image 2.png",
            "/assets/images/image 6.png",
            "/assets/images/image 7.png"
        ],
        discount: "50",
        description: "Perched on the cliffs of Amalfi, this villa offers an infinity pool and stunning sea views, ideal for a luxurious Italian escape.",
        reviews: [
            {
                name: "Sophia Rossi",
                avatar: "/assets/avatars/sophia.jpg",
                rating: 5,
                comment: "The infinity pool and views were unforgettable!"
            },
            {
                name: "Mateo Gonzalez",
                avatar: "/assets/avatars/mateo.jpg",
                rating: 4.9,
                comment: "Luxury at its finest. Highly recommend this villa."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: [
            "Beachfront",
            "Pet Friendly",
            "Free Parking"
        ],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 13.png",
            "/assets/images/image 7.png",
            "/assets/images/image 9.png",
            "/assets/images/image 4.png"
        ],
        discount: "",
        description: "A pet-friendly beachfront villa in Noosa, offering direct access to the coast and ample parking for a perfect Australian holiday.",
        reviews: [
            {
                name: "Ella Harris",
                avatar: "/assets/avatars/ella.jpg",
                rating: 4.8,
                comment: "Great for our dog and family. Beach access was perfect."
            },
            {
                name: "Oliver King",
                avatar: "/assets/avatars/oliver.jpg",
                rating: 4.9,
                comment: "Spacious and clean. Loved the coastal location."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: [
            "City Center",
            "Free WiFi",
            "Public Transport"
        ],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: [
            "/assets/images/image 15.png",
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 18.png"
        ],
        discount: "",
        description: "A modern downtown apartment in Tokyo, steps away from public transport and offering fast WiFi for city adventurers.",
        reviews: [
            {
                name: "Hana Sato",
                avatar: "/assets/avatars/hana.jpg",
                rating: 4.8,
                comment: "Perfect location for exploring Tokyo. Very clean."
            },
            {
                name: "Ryan Tanaka",
                avatar: "/assets/avatars/ryan.jpg",
                rating: 4.7,
                comment: "Compact but stylish. Great for a short city stay."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: [
            "Safari",
            "Guided Tours",
            "Free Breakfast"
        ],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 16.png",
            "/assets/images/image 4.png",
            "/assets/images/image 9.png"
        ],
        discount: "20",
        description: "Immerse yourself in the Serengeti with this luxury safari lodge, offering guided tours and complimentary breakfast for an unforgettable adventure.",
        reviews: [
            {
                name: "Zoe Mweupe",
                avatar: "/assets/avatars/zoe.jpg",
                rating: 5,
                comment: "The safari tours were incredible! Amazing lodge."
            },
            {
                name: "Ahmed Khan",
                avatar: "/assets/avatars/ahmed.jpg",
                rating: 4.9,
                comment: "Luxurious and great staff. Breakfast was top-notch."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: [
            "Countryside",
            "Fireplace",
            "Self Checkin"
        ],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: [
            "/assets/images/image 17.png",
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 11.png"
        ],
        discount: "25",
        description: "A quaint countryside cottage in the Cotswolds, featuring a cozy fireplace and self-check-in for a charming rural escape.",
        reviews: [
            {
                name: "Lily Evans",
                avatar: "/assets/avatars/lily.jpg",
                rating: 4.6,
                comment: "So charming and peaceful. Loved the fireplace."
            },
            {
                name: "George Baker",
                avatar: "/assets/avatars/george.jpg",
                rating: 4.5,
                comment: "Perfect for a quiet weekend in the countryside."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Riverfront Mansion",
        address: {
            state: "Paris",
            city: "Île-de-France",
            country: "France"
        },
        rating: 4.86,
        category: [
            "Riverfront",
            "Private Garden",
            "Self Checkin"
        ],
        price: 5000,
        offers: {
            bed: "4",
            shower: "3",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 18.png",
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 15.png"
        ],
        discount: "30",
        description: "A grand riverfront mansion in Paris, featuring a private garden and easy self-check-in, perfect for a luxurious French getaway.",
        reviews: [
            {
                name: "Claire Dubois",
                avatar: "/assets/avatars/claire.jpg",
                rating: 4.9,
                comment: "Stunning mansion with a beautiful garden. Loved it!"
            },
            {
                name: "Pierre Martin",
                avatar: "/assets/avatars/pierre.jpg",
                rating: 4.8,
                comment: "Very spacious and elegant. Perfect for our group."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    }
];
const CATEGORIES = [
    {
        name: "Rooms",
        image: "/assets/icons/living-room 1.svg"
    },
    {
        name: "Mansion",
        image: "/assets/icons/mansion 1.png"
    },
    {
        name: "Countryside",
        image: "/assets/icons/farm 1.png"
    },
    {
        name: "Villa",
        image: "/assets/icons/villa 1.svg"
    },
    {
        name: "Tropical",
        image: "/assets/icons/palm-tree 1.svg"
    },
    {
        name: "New",
        image: "/assets/icons/key-chain 1.svg"
    },
    {
        name: "Amazing pool",
        image: "/assets/icons/swimming-pool 1.svg"
    },
    {
        name: "Beach house",
        image: "/assets/icons/vacations 1.svg"
    },
    {
        name: "Island",
        image: "/assets/icons/island (1) 1.svg"
    },
    {
        name: "Camping",
        image: "/assets/icons/tent 1.svg"
    },
    {
        name: "Apartment",
        image: "/assets/icons/apartment 1.svg"
    },
    {
        name: "House",
        image: "/assets/icons/home 1.svg"
    },
    {
        name: "Lakefront",
        image: "/assets/icons/cottage 1.svg"
    },
    {
        name: "Farm house",
        image: "/assets/icons/barn 1.svg"
    },
    {
        name: "Treehouse",
        image: "/assets/icons/treehouse (1) 1.svg"
    },
    {
        name: "Cabins",
        image: "/assets/icons/cabin 1.svg"
    },
    {
        name: "Castles",
        image: "/assets/icons/castle-tower 1.svg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/Card.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [client] (ecmascript)");
;
;
;
const Card = ({ property })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full cursor-pointer hover:shadow-md hover:rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["HOUSE"],
                alt: "house image",
                className: "rounded-lg"
            }, void 0, false, {
                fileName: "[project]/components/common/Card.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between gap-4items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-[22px]",
                            children: property.name
                        }, void 0, false, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/Card.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-4 h-4 text-[#FAC02B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Card.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-[17px] ml-2",
                                        children: property.price
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Card.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/common/Card.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4 text-[#FAC02B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Card.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-[17px] ml-2",
                                        children: property.rating
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Card.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/common/Card.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/common/Card.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/Card.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/Card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/index.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Card.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Home() {
    _s();
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchProperty = {
                "Home.useEffect.fetchProperty": async ()=>{
                    try {
                        setLoading(true);
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].get("/api/properties");
                        setProperties(response.data);
                        setLoading(false);
                    } catch (error) {
                        console.error("Error fetching properties:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Home.useEffect.fetchProperty"];
            fetchProperty();
        }
    }["Home.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center w-full min-h-[70vh]",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/pages/index.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    if (!properties || properties.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center w-full min-h-[70vh]",
            children: "No properties found."
        }, void 0, false, {
            fileName: "[project]/pages/index.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full space-y-4 font-quicksand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold",
                children: "Properties"
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        property: property,
                        title: ""
                    }, property.id, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_s(Home, "h/d9PDvLcScgxtk2XAMC9CcYJ6g=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.tsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/index.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/pages/index (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__685479d0._.js.map