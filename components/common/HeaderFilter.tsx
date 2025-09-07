import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { Search } from "lucide-react";

const HeaderFilter: React.FC = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState("");

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  return (
    <div className="flex items-center justify-between gap-4 py-1 pl-8 pr-2 border border-gray-200 divide-gray-200 rounded-full divide-x-1">
      <div className="lg:w-1/2">
        <InputField
          label="Location"
          placeholder="Search for destination"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          type="text"
          className="max-w-md"
        />
      </div>
      <div>
        <InputField
          label="Check in"
          placeholder="Add date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          id="check-in"
          type="date"
          className="max-w-md"
          min={todayFormatted}
        />
      </div>
      <div>
        <InputField
          label="Check out"
          placeholder="Add date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          id="check-out"
          type="date"
          min={todayFormatted}
          className="max-w-md"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <InputField
          label="People"
          placeholder="Add guests"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          id="people"
          type="text"
          className="max-w-md"
        />

        <Button
          size="none"
          variant="primary"
          onClick={() => console.log("Searching...")}
          iconLeft={<Search className="w-4 h-4" />}
          ariaLabel="Search for properties"
          className="flex items-center justify-center p-2 text-white bg-[#FFA800] rounded-full"
        />
      </div>
    </div>
  );
};

export default HeaderFilter;
