import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  iconLeft,
  iconRight,
  className = '',
  type = 'button',
  ariaLabel,
  fullWidth = false,
  rounded = 'default',
}) => {
  // Define Tailwind classes for variants
  const variantStyles = {
    primary: `bg-[#34967C] text-white hover:bg-[#2c7a5a] ${disabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}`,
    secondary: `bg-gray-200 text-gray-900 hover:bg-gray-300 ${disabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}`,
    danger: `bg-red-600 text-white hover:bg-red-700 ${disabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}`,
    outline: `bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100 ${disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`,
    success: `bg-green-600 text-white hover:bg-green-700 ${disabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}`,
    warning: `bg-yellow-500 text-white hover:bg-yellow-600 ${disabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'cursor-pointer'}`,
  };

  // Define Tailwind classes for sizes
  const sizeStyles = {
    'extra-small': 'px-1 py-0.5 text-xs',
    small: 'px-2 py-1 text-sm',
    none: '',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    'extra-large': 'px-8 py-4 text-xl',
  };

  // Define Tailwind classes for rounded corners
  const roundedStyles = {
    default: 'rounded-full',
    none: 'rounded-none',
    full: 'rounded-full',
    large: 'rounded-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${roundedStyles[rounded]}
        ${fullWidth ? 'w-full' : 'w-auto'}
        font-semibold flex items-center justify-center gap-2
        ${className}
      `}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      {label}
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
};

export default Button;