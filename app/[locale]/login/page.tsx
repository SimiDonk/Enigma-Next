"use client";

import { useState, useTransition } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        await login(formData);
      } catch (err: unknown) {
        setError((err as Error).message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl mb-2">Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="block w-full mb-2 p-2 border"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="block w-full mb-2 p-2 border"
        required
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2"
        disabled={isPending}
      >
        {isPending ? "Login..." : "Login"}
      </button>
    </form>
  );
}
