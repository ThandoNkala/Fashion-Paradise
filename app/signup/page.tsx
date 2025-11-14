"use client";

import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
      const form = e.target;
        form.reset();
      } else {
        console.log("Failed to create account");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="grid place-items-center h-screen text-black">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-black-400">
        <h1 className="text-xl font-bold my-4 text-black">Create an Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded w-80 mb-4"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-80 mb-4"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border p-2 rounded w-80 mb-4"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-80 cursor-pointer"
          >
            Sign Up
          </button>

          {error && (
            <div className="bg-red-500 text-white text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <p className="text-sm mt-2 text-right">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
