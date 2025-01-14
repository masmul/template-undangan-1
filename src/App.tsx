import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { CoupleProfile } from './components/CoupleProfile';
import { VenueDetails } from './components/VenueDetails';

function App() {
  const params = new URLSearchParams(window.location.search);
  const recipientName = params.get('kepada') || 'Tamu Terhormat';

  useEffect(() => {
    document.title = `Undangan Nikah Kepada: ${recipientName}`;
  }, [recipientName]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 my-8 relative border-8 border-double border-amber-200">
        <Header recipientName={recipientName} />

        {/* Main Content */}
        <div className="text-center space-y-8 py-4">
          {/* Bismillah */}
          <div className="arabic-text text-2xl md:text-3xl text-amber-800 font-semibold">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>

          <div className="text-amber-800 font-semibold">
            ASSALAMUALAIKUM WARAHMATULLAHI WABARAKATUH
          </div>

          <p className="text-gray-700 leading-relaxed">
            Segala puji kami haturkan kepada Allah SWT yang telah melimpahkan kebahagiaan kepada kami. 
            Dengan ini kami bermaksud menggelar acara resepsi pernikahan putra-putri kami:
          </p>

          {/* Couple Profiles */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <CoupleProfile
              name="Muhammad Fuad"
              image="/broom.png"
              parents="Putra Bapak Muhammad Patel dan Ibu Juliana Silva"
            />
            
            <CoupleProfile
              name="Anna Khodijah"
              image="/bride.png"
              parents="Putri Bapak Aaron Loeb dan Ibu Estelle Darcy"
            />
          </div>

          {/* Venue Details with Map */}
          <VenueDetails />

          <div className="text-amber-800 font-semibold mt-8">
            WASSALAMUALAIKUM WARAHMATULLAHI WABARAKATUH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
