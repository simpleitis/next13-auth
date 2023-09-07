import React from "react";

export default function UserProfile({ params }: any) {
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
}
