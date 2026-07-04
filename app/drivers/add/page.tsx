"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  status: "Available" | "Busy" | "Offline";
};

export default function AddDriverPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    status: "Available",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/dashboard/drivers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Driver Added");
  };

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl mb-4">Add Driver</h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 bg-black text-white"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 bg-black text-white"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="p-2 bg-black text-white"
        />

        <input
          name="vehicle"
          placeholder="Vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="p-2 bg-black text-white"
        />

       <label
  htmlFor="status"
  className="text-sm font-medium text-slate-300"
>
  Driver Status
</label>

<select
  id="status"
  name="status"
  value={form.status}
  onChange={handleChange}
  className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
>
  <option value="Available">Available</option>
  <option value="Busy">Busy</option>
  <option value="Offline">Offline</option>
</select>

        <button className="bg-blue-600 px-4 py-2 text-white">
          Add Driver
        </button>

      </form>
    </div>
  );
}