import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React, { useEffect } from "react";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mounted");

    return () => console.log("MainLayout unmounted");
  }, []);
  return (
    <div>
      <h1>Main Layout</h1>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>Home</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
