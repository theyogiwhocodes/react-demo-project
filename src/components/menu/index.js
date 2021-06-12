import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="application-menu">
      <ul>
        <li>
          <Link href="/"></Link>
        </li>
        <li>
          <Link href="/search"></Link>
        </li>
      </ul>
    </div>
  );
}
