import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/notes"} className="hover:text-red-500">
        Notes
      </Link>
    </div>
  );
}
