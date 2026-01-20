import React from 'react';
import { motion } from 'framer-motion';

const ADDRESS_QUERY = encodeURIComponent(
  '54 Balarabe Musa Crescent, Victoria Island, Lagos, Nigeria'
);
// OpenStreetMap embed for the address area
const OSM_EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=3.424%2C6.428%2C3.432%2C6.434&layer=mapnik&marker=6.4312%2C3.4284`;
const OSM_LINK = `https://www.openstreetmap.org/?mlat=6.4312&mlon=3.4284#map=17/6.4312/3.4284`;

export function LocationMap() {
  return (
    <motion.div
      className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="h-80 w-full relative">
        <iframe
          title="WMO Gadgets HQ Map"
          src={OSM_EMBED_SRC}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-xs">
          <div className="font-semibold text-sm">WMO Gadgets HQ</div>
          <div className="text-[11px] opacity-90">
            54 Balarabe Musa Crescent, Victoria Island, Lagos, Nigeria
          </div>
          <a
            href={OSM_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-[11px] font-semibold underline underline-offset-2"
          >
            View full map
          </a>
        </div>
      </div>
    </motion.div>
  );
}

