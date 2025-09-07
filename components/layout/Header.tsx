import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderFilter from "../common/HeaderFilter";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import InputField from "../common/InputField";
import { Search } from "lucide-react";
import Ads from "../common/Ads";

const Header: React.FC = () => {
  const [location, setLocation] = useState("");
  return (
    <header className="flex flex-col w-full">
      <Ads />
      <div className="flex items-center justify-between w-full gap-2 px-4 py-3 bg-white border-b border-gray-200 lg:px-6">
        <div className="hidden lg:w-1/4 md:flex">
          <Link href="/" className="text-2xl text-white hover:scale-105">
            <Image
              src="/assets/images/alx_logo.png"
              alt="ALX Logo"
              width={58.73}
              height={30.6}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <HeaderFilter />
        </div>
        <div className="flex items-center justify-between gap-2 py-1 pl-6 pr-2 border border-gray-200 rounded-full sm:hidden">
          <InputField
            label="Where to?"
            placeholder="Location . Date . Add guest"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="people"
            type="text"
            className="max-w-md"
          />

          <Button
            size="none"
            onClick={() => console.log("Searching...")}
            iconLeft={<Search />}
            ariaLabel="Search for properties"
            className="flex items-center justify-center p-2 bg-[#FFA800] rounded-full"
          />
        </div>
        <div className="items-center hidden gap-4 lg:flex">
          <Button
            label="Sign In"
            className="hidden md:block bg-[#34967C] text-white hover:bg-[#34967C]/80 "
            onClick={() => console.log("Sign In Clicked")}
          />
          <Button
            label="Sign Up"
            variant="outline"
            className="hidden md:block"
            onClick={() => console.log("Sign Up Clicked")}
          />
        </div>
        <div className="block lg:hidden">
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
