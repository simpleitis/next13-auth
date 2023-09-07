"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [password, setpassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      await axios.post("/api/users/resetpassword", { token, password });
      setMessage("Password reset!");
    } catch (error: any) {
      console.log(error.reponse.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        placeholder="Enter new password"
        className="block text-black"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleResetPassword} className="p-2 border my-2">
        Reset password
      </button>
      {message.length > 0 && (
        <div>
          <p>{message}</p>
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
