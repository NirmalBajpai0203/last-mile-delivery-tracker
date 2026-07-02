"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const positions = [
  { name: "Rahul", lat: 28.6139, lng: 77.2090 },
  { name: "Amit", lat: 28.6219, lng: 77.2300 },
  { name: "Rohit", lat: 28.6319, lng: 77.2180 },
];

export default function TrackingMap() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Live Tracking Map
        </h2>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
          GPS Live
        </span>
      </div>

      <div className="h-[400px] overflow-hidden rounded-xl">

        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={12}
          className="h-full w-full"
        >

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {positions.map((p) => (
            <Marker key={p.name} position={[p.lat, p.lng]}>
              <Popup>{p.name} is here 🚚</Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>
    </div>
  );
}