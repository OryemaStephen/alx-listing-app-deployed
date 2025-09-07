/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardProps } from "@/interfaces";
import { DollarSign, Star } from "lucide-react";
import { HOUSE } from "@/constants";

const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="w-full h-full cursor-pointer hover:shadow-md hover:rounded-lg">
      <img src={HOUSE} alt="house image" className="rounded-lg" />
      <div className="flex flex-col justify-between gap-4items-center">
        <div>
          <h3 className="font-semibold text-[22px]">{property.name}</h3>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 text-[#FAC02B]" />
            <p className="font-medium text-[17px] ml-2">{property.price}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-[#FAC02B]" />
            <p className="font-medium text-[17px] ml-2">{property.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
