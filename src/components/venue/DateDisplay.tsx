import React from 'react';

export function DateDisplay() {
  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <div className="text-4xl font-bold text-amber-800">30</div>
        <div className="text-xl">
          <div className="font-semibold text-amber-800">JUNI</div>
          <div className="text-amber-800">2030</div>
        </div>
      </div>
      <div className="text-gray-600">
        Jumat, Pukul: 13:00 - 15:00
      </div>
    </>
  );
}
