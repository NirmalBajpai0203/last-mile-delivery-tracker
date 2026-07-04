"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-slate-950">

      <form
        onSubmit={handleLogin}
        className="w-[380px] rounded-xl bg-slate-900 p-8 shadow-xl"
      >

        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Login
        </h1>

        <input
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white"
        >
          Login
        </button>

      </form>

    </div>
  );
}