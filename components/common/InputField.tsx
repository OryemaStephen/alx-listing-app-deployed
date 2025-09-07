import React from 'react';
import { InputProps } from '@/interfaces';

const InputField: React.FC<InputProps> = ({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  className = '',
  id,
  min,
  max,
}) => {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <label htmlFor={id} className="text-sm text-black">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={type !== 'date' ? placeholder : undefined}
          min={min}
          max={max}
          className={`w-full text-base placeholder:text-xs text-gray-900 bg-transparent focus:outline-none ${
            type === 'date' && !value ? 'text-transparent placeholder:text-xs' : 'text-gray-900 placeholder:text-xs'
          }`}
        />
        {type === 'date' && !value && (
          <span className="absolute left-0 text-xs text-gray-400 -translate-y-1/2 pointer-events-none top-1/2">
            {placeholder}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;