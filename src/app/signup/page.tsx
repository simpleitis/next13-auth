"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SignupPage() {
  const [user, setuser] = useState({ email: "", password: "", username: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const router = useRouter();

  const onSignup = async () => {
    console.log(user)
    try {
      const response = await axios.post("/api/users/signup", user);

      router.push("/login");
    } catch (error: any) {
      console.log("Sign up failed:", error);
    }
  };


  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex-col p-5">
      <h1>SignupPage</h1>
      <div>
        <input
          type="text"
          placeholder="username"
          className="block mb-2 text-black"
          value={user.username}
          onChange={(e) => setuser({ ...user, username: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          className="block mb-2 text-black"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          className="block text-black"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
      </div>
      <div>
        <button
          className="p-2 border mt-2 "
          // disabled={buttonDisabled}
          onClick={onSignup}
        >
          Signup
        </button>
      </div>
      <Link href="/login" className="underline">
        Login
      </Link>
    </div>
  );
}
