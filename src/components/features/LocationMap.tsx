'use client';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

import { env } from '@/config/env';
import { useI18n } from '@/context/I18nContext';

const STORE_NAME = 'An An Mart';
const STORE_ADDRESS_LINES = ['191 Lý Thường Kiệt,', 'Hội An, Quảng Nam, Vietnam'];
const STORE_COORDINATES: [number, number] = [
  Number(env.NEXT_PUBLIC_STORE_LNG),
  Number(env.NEXT_PUBLIC_STORE_LAT),
]; // 191 Lý Thường Kiệt, Minh An, Hội An
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${STORE_COORDINATES[1]},${STORE_COORDINATES[0]}`;

const MAPBOX_ACCESS_TOKEN = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function LocationMap() {
  const { t } = useI18n();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current || !MAPBOX_ACCESS_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: STORE_COORDINATES,
      zoom: 16,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    new mapboxgl.Marker({ color: '#e11d48' }).setLngLat(STORE_COORDINATES).addTo(map.current);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  if (!MAPBOX_ACCESS_TOKEN) {
    return (
      <div className="flex h-125 w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
        {t('locationMap.missingMapToken')}
      </div>
    );
  }

  return (
    <div className="relative h-125 w-full">
      <div ref={mapContainer} className="h-full w-full" />

      <div className="absolute top-4 left-4 max-w-56 rounded-xl bg-white p-4 shadow-lg">
        <p className="text-sm font-bold text-gray-900">{STORE_NAME}</p>
        <p className="mt-1 text-sm leading-snug text-gray-600">
          {STORE_ADDRESS_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-blue-600 hover:underline"
        >
          {t('locationMap.viewLargerMap')}
        </a>
      </div>
    </div>
  );
}
