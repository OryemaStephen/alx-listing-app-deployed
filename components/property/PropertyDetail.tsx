import { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";


const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "What We Offer", "Reviews", "About Host"];

  return (
    <div className="container p-6 mx-auto">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center mt-2 space-x-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-4">
        {property.image.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${property.name} ${index + 1}`}
            width={400}
            height={384}
            className="object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-8 lg:flex-row">
        {/* Tabs Section */}
        <div className="flex-1">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "Description" && (
              <div>
                <h2 className="text-2xl font-semibold">Description</h2>
                <p className="mt-2 text-gray-600">{property.description}</p>
              </div>
            )}
            {activeTab === "What We Offer" && (
              <div>
                <h2 className="text-2xl font-semibold">What this place offers</h2>
                <ul className="flex flex-wrap gap-4 mt-2">
                  {property.category.map((amenity, index) => (
                    <li key={index} className="p-2 bg-gray-200 rounded-md">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "Reviews" && (
              <div>
                <ReviewSection reviews={property.reviews} />
              </div>
            )}
            {activeTab === "About Host" && (
              <div>
                <h2 className="text-2xl font-semibold">About the Host</h2>
                <div className="flex items-center mt-4">
                  <Image
                    src={property.host.avatar}
                    alt={property.host.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 mr-4 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{property.host.name}</p>
                    <p className="text-sm text-gray-600">
                      Joined {property.host.joined}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{property.host.bio}</p>
              </div>
            )}
          </div>
        </div>

        {/* Booking Section (Sticky Sidebar) */}
        <div className="lg:w-80">
          <div className="lg:sticky lg:top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;