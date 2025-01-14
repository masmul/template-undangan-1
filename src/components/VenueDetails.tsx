import React from 'react';
import { DateDisplay } from './venue/DateDisplay';
import { LocationInfo } from './venue/LocationInfo';
import { MapEmbed } from './venue/MapEmbed';

export function VenueDetails() {
  return (
    <div className="space-y-4 my-8">
      <h3 className="text-xl font-semibold text-amber-800">
        Yang akan dilaksanakan pada:
      </h3>
      <DateDisplay />
      <LocationInfo />
      <MapEmbed />
    </div>
  );
}
