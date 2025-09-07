import React from 'react';
import { AvatarProps } from '../../interfaces';
import { User } from 'lucide-react';
import Image from 'next/image';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  size = 'medium',
  shape = 'circle',
  border = false,
  className = '',
}) => {
  const sizeStyles = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-12 h-12 text-base',
    large: 'w-16 h-16 text-lg',
  };

  const shapeStyles = {
    circle: 'rounded-full',
    square: 'rounded-md',
  };

  const baseStyles = `
    flex items-center justify-center
    bg-[#34967C] text-white
    font-quicksand font-semibold
    overflow-hidden
    ${sizeStyles[size]}
    ${shapeStyles[shape]}
    ${border ? 'border-2 border-gray-300' : ''}
    ${className}
  `;

  return (
    <div className={baseStyles} role="img" aria-label={alt}>
      {src ? (
        <Image src={src} alt={alt} className="object-cover w-full h-full" loading="lazy" />
      )  : (
        <User className="w-2/3 h-2/3" />
      )}
    </div>
  );
};

export default Avatar;