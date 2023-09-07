"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage() {
  const [data, setdata] = useState("nothing");

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get("api/users/logout");
    } catch (error: any) {
      console.log(error.message);
    }
    router.push("/login");
  };

  const getUserDetails = async () => {
    console.log("called");
    const response = await axios.get("/api/users/me");
    setdata(response.data.data._id);
  };

  return (
    <div className="flex-col gap-10">
      <p>ProfilePage</p>
      <button onClick={handleLogout} className="block p-2 border my-2">
        Logout
      </button>
      <button onClick={getUserDetails} className="block p-2 border my-2">
        Get data
      </button>
      
      <h2>
        {data === "nothing" ? (
          "No user data fetched!"
        ) : (
          <Link href={`/profile/${data}`}>View profile info</Link>
        )}
      </h2>
    </div>
  );
}
