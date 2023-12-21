import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex-col items-center justify-center flex gap-4 md:justify-between md:flex-row max-w-7xl mx-auto p-5">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            height={38}
            width={128}
          />
        </Link>
        <p>2023 Alexander. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
