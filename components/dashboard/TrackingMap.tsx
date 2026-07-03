"use client";


import type { LatLngExpression } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const center: LatLngExpression = [28.6139, 77.209];

const positions = [
  {
    name: "Rahul",
    position: [28.6139, 77.209] as LatLngExpression,
  },
  {
    name: "Amit",
    position: [28.6219, 77.23] as LatLngExpression,
  },
  {
    name: "Rohit",
    position: [28.6319, 77.218] as LatLngExpression,
  },
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
          center={center}
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {positions.map((driver) => (
            <Marker
              key={driver.name}
              position={driver.position}
            >
              <Popup>
                {driver.name} is here 🚚
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}