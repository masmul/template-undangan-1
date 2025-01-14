import React from 'react';

interface CoupleProfileProps {
  name: string;
  image: string;
  parents: string;
  className?: string;
}

export function CoupleProfile({ name, image, parents, className = '' }: CoupleProfileProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-amber-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-script text-amber-800">
          {name}
        </h2>
        <p className="text-gray-600">
          {parents}
        </p>
      </div>
    </div>
  );
}
