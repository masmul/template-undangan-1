import React from 'react';

export function MapEmbed() {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0376086557584!2d110.36707569999999!3d-7.782921799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a591a4d553bd5%3A0xc0f964003add568b!2sYogyakarta%20Monument!5e0!3m2!1sen!2sid!4v1735883644010!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
