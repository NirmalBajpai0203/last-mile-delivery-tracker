"use client";

import { useEffect, useState } from "react";
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

interface Driver {
  _id: string;
  name: string;
  latitude: number;
  longitude: number;
  status?: string;
  vehicle?: string;
}

export default function TrackingMap() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await fetch("/api/dashboard/drivers", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch drivers");
        }

        const data: Driver[] = await res.json();
        setDrivers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();

    // Auto refresh every 10 seconds
    const interval = setInterval(fetchDrivers, 10000);

    return () => clearInterval(interval);
  }, []);

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
        {loading ? (
          <div className="flex h-full items-center justify-center text-slate-400">
            Loading Map...
          </div>
        ) : (
          <MapContainer
            center={[28.6139, 77.209]}
            zoom={12}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {drivers.map((driver) => (
              <Marker
                key={driver._id}
                position={[driver.latitude, driver.longitude]}
              >
                <Popup>
                  <div className="space-y-1">
                    <p>
                      <strong>{driver.name}</strong>
                    </p>

                    <p>🚚 {driver.vehicle ?? "Vehicle N/A"}</p>

                    <p>📍 {driver.status ?? "Available"}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
}