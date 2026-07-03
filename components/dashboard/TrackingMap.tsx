"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

const iconDefault = L.Icon.Default.prototype as unknown as {
  _getIconUrl?: unknown;
};

delete iconDefault._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

const positions = [
  { name: "Rahul", position: [28.6139, 77.2090] as [number, number] },
  { name: "Amit", position: [28.6219, 77.2300] as [number, number] },
  { name: "Rohit", position: [28.6319, 77.2180] as [number, number] },
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
          center={[28.6139, 77.209]}
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {positions.map((driver) => (
            <Marker key={driver.name} position={driver.position}>
              <Popup>{driver.name} 🚚</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}