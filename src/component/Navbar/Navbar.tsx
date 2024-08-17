import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex flex-row justify-between p-4"
      style={{ background: "linear-gradient(36deg, #5636b0,25%, #0d0d31)" }}
    >
      <h1>Tool For Dev</h1>
      <ul
        className="flex flex-row"
        style={{
          width: "40%",
          justifyContent: "space-around",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <Link href="/qr-code">QR Code</Link>
        </li>
        <li>
          <Link href="/css-gradient">CSS Gradient</Link>
        </li>
        <li>
          <Link href="/md-reader">MD reader</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
