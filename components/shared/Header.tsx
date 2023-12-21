import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="w-full max-w-7xl mx-auto p-5 flex items-center justify-between">
        <Link className="w-36" href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            height={38}
            width={128}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center gap-3">
          <SignedOut>
            <Button asChild size="lg">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
