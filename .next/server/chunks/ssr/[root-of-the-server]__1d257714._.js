module.exports = {

"[project]/constants/index.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/components/common/Card.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [ssr] (ecmascript)");
;
;
;
const Card = ({ property })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-full h-full cursor-pointer hover:shadow-md hover:rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["HOUSE"],
                alt: "house image",
                className: "rounded-lg"
            }, void 0, false, {
                fileName: "[project]/components/common/Card.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between gap-4items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-4 h-4 text-[#FAC02B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Card.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4 text-[#FAC02B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Card.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
const __TURBOPACK__default__export__ = Card;
}}),
"[externals]/axios [external] (axios, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Card.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
function Home() {
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchProperty = async ()=>{
            try {
                setLoading(true);
                const response = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get("/api/properties");
                setProperties(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching properties:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchProperty();
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center w-full min-h-[70vh]",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/pages/index.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    if (!properties || properties.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center w-full min-h-[70vh]",
            children: "No properties found."
        }, void 0, false, {
            fileName: "[project]/pages/index.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "w-full space-y-4 font-quicksand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold",
                children: "Properties"
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>DollarSign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
];
const DollarSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("dollar-sign", __iconNode);
;
 //# sourceMappingURL=dollar-sign.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript) <export default as DollarSign>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DollarSign": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Star)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Star": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "getServerSideProps": (()=>getServerSideProps),
    "getStaticPaths": (()=>getStaticPaths),
    "getStaticProps": (()=>getStaticProps),
    "reportWebVitals": (()=>reportWebVitals),
    "routeModule": (()=>routeModule),
    "unstable_getServerProps": (()=>unstable_getServerProps),
    "unstable_getServerSideProps": (()=>unstable_getServerSideProps),
    "unstable_getStaticParams": (()=>unstable_getStaticParams),
    "unstable_getStaticPaths": (()=>unstable_getStaticPaths),
    "unstable_getStaticProps": (()=>unstable_getStaticProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)");
// Import the app and document modules.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_document$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/_document.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/_app.tsx [ssr] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/index.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'default');
const getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticProps');
const getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticPaths');
const getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getServerSideProps');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'config');
const reportWebVitals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'reportWebVitals');
const unstable_getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticParams');
const unstable_getServerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerSideProps');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_document$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1d257714._.js.map