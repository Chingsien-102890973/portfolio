"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  //create array of path
  const list = [
    { url: "/", title: "HOME" },
    { url: "/about", title: "ABOUT" },
    { url: "/portfolio", title: "PORTFOLIO" },
    { url: "/contact", title: "CONTACT" },
  ];

  const [open, setOpen] = useState(false); //client component
  return (
    <div className="text-xl h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* for the medium up */}
      {/* links */}
      <div className="hidden md:flex gap-5 w-1/3">
        {list.map((item) => {
          return (
            <div className="" key={item.url}>
              <NavLink key={item.url} link={item} />
            </div>
          );
        })}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Chingsien</span>
          {/* becuase it does have width and height initailise then it will not center so we need to use the flex box inside of the element to make it center in it own w and h */}
          <span className=" w-14 h-8 rounded bg-white text-black flex items-center justify-center ">
            .dev.org
          </span>
        </Link>
      </div>
      {/* social */}
      <div className="hidden md:flex gap-5 w-1/3 lg:justify-end">
        <Link href="https://github.com/Chingsien-102890973">
          <img src="./github.png" alt="github" />
        </Link>
        <Link href="https://www.instagram.com/chingsienly/">
          <img src="./instagram.png" alt="instagram" />
        </Link>
        <Link href="https://www.linkedin.com/in/chingsien-ly-852583265/">
          <img src="./linkedin.png" alt="" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100012114007103">
          <img src="./facebook.png" alt="" />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* Menu button */}
        {/* relative to the parent */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU List */}
        {open && (
          <div className="absolute top-0 left-0 bg-black w-screen h-screen text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {list.map((item) => {
              return (
                <Link key={item.url} href={item.url} className="">
                  {item.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
