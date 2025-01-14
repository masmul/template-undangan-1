import React from 'react';
import { Flower2 } from 'lucide-react';

interface HeaderProps {
  recipientName: string;
}

export function Header({ recipientName }: HeaderProps) {
  return (
    <>
      {/* Islamic Pattern Corners */}
      <div className="absolute top-0 left-0 p-4">
        <Flower2 className="w-12 h-12 text-amber-400" />
      </div>
      <div className="absolute top-0 right-0 p-4">
        <Flower2 className="w-12 h-12 text-amber-400" />
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <Flower2 className="w-12 h-12 text-amber-400" />
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <Flower2 className="w-12 h-12 text-amber-400" />
      </div>

      {/* Recipient */}
      <div className="text-center mb-8">
        <div className="inline-block border-b-2 border-amber-200 px-4 py-2">
          <p className="text-amber-800 font-semibold">Kepada Yth:</p>
          <p className="text-xl text-amber-800 font-script mt-1">Sdr/i: {recipientName}</p>
        </div>
      </div>
    </>
  );
}
