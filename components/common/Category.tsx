import { CategoryProps } from '@/interfaces';
import React from 'react';
import Image from 'next/image';

const Category: React.FC<CategoryProps> = ({ label, active = false, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 p-1 rounded-lg text-sm font-medium transition-colors ${
        active
          ? 'text-[#616161]'
          : 'text-[#616161] hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center justify-center">
          <Image
            src={icon}
            alt={label}
            width={34}
            height={34}
          />
      </div>
      <span className={`relative w-full ${active ? 'font-semibold' : 'font-normal'}`}>
        {label}
        {active && (
          <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#34967C]"></span>
        )}
      </span>
    </button>
  );
};

export default Category;