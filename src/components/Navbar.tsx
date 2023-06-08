import React from "react";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-white p-2 sticky top-0 drop-shadow-xl z-10">
      <div className="md:h-14 h-20 mx-auto md:px-4 container flex items-center justify-around flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 font-bold text-xl md:order-1">
          <Link href="/">
            <h1>Kayden</h1>
          </Link>
        </div>

        <div className="order-2">
          <Search />
        </div>
      </div>
    </nav>
  );
}
