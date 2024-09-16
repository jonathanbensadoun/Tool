import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex flex-row justify-between p-4"
      style={{ background: "linear-gradient(36deg, #5636b0,25%, #0d0d31)" }}
    >
      <Link href="/" className="text-white font-bold">
        Tool For Dev
      </Link>
      <ul className="flex flex-row items-center space-x-4 md:space-x-8 gap-4">
        <li>
          <Link href="/favicon-generator" className="text-white">
            <span className="hidden md:inline">Favicon generator</span>
            <span className="md:hidden">
              <Image
                src="/icons8-favicon-48.png"
                width={24}
                height={24}
                alt="QR Code Generator"
              />
            </span>
          </Link>
        </li>

        <li>
          <Link href="/qr-code" className="text-white">
            <span className="hidden md:inline">QR Code</span>
            <span className="md:hidden">
              <Image
                src="/qr-code-icon.png"
                width={24}
                height={24}
                alt="QR Code Generator"
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/css-gradient" className="text-white">
            <span className="hidden md:inline">CSS Gradient</span>
            <span className="md:hidden">
              <Image
                src="/gradient-icon.png"
                width={24}
                height={24}
                alt="CSS Gradient Generator"
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/md-reader" className="text-white">
            <span className="hidden md:inline">MD reader</span>
            <span className="md:hidden">
              <Image
                src="/reader-icon.png"
                width={24}
                height={24}
                alt="Reader for markdown"
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/date-generator" className="text-white">
            <span className="hidden md:inline">Date generator</span>
            <span className="md:hidden">
              <Image
                src="/date-icon.png"
                width={24}
                height={24}
                alt="Date javascript Generator"
              />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/password-generator" className="text-white">
            <span className="hidden md:inline">Password generator</span>
            <span className="md:hidden">
              <Image
                src="/password-generator-icon.png"
                width={24}
                height={24}
                alt="Date javascript Generator"
              />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
