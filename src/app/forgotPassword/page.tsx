"use client";
import axios from "axios";
import React, {  useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  const handleForgotPasswordClick = async () => {
    const response = await axios.post("api/users/forgotpassword", {
      email: email,
    });
  };
  return (
    <div className="p-3 flex-col">
      <input placeholder="Enter email address" className="block text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgotPasswordClick} className="p-2 border my-2">
        Reset password
      </button>
    </div>
  );
}
