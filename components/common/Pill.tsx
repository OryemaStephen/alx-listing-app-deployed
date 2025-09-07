import { PillProps } from '@/interfaces';
import React from 'react';



const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-[#F0FFFB] border border-[#34967C] text-[#34967C]'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;