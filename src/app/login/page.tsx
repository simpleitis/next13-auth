"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [user, setuser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const router = useRouter();

  const onLogin = async () => {
    console.log(user);
    try {
      const response = await axios.post("/api/users/login", user);

      router.push("/profile");
    } catch (error: any) {
      console.log("Sign up failed:", error);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleForgotPassword = async () => {

  };

  return (
    <div className="flex-col p-5">
      <h1>Login</h1>
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
          onClick={onLogin}
        >
          Login
        </button>
      </div>
      <Link href="/signup" className="underline">
        Signup
      </Link>
      <Link href="/forgotPassword" className=" block underline">
        Forgot Password
      </Link>
    </div>
  );
}
