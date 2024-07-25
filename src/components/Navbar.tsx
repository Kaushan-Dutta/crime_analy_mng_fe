"use client";

import React from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import ProfileDropDown from "./ProfileDropDown";

const style = {
  textcolor: `hover:border-b-2 hover:border-ascent`,
};

const Navbar: React.FC = () => {
  const { account } = useAuth();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:h-20 h-14 py-2 px-7 flex justify-between items-center bg-background1 text-background">
      <div className="font-aton md:text-3xl text-xl tracking-wider">
        <Link href="/">CrimeWatch</Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/analytics" className={style.textcolor}>
          Analytics
        </Link>
        {!account && (
          <>
            <Link href="/login" className={style.textcolor}>
              Login
            </Link>
            <Link href="/register" className={`${style.textcolor} md:inline hidden`}>
              SignUp
            </Link>
          </>
        )}
        <p>{account?.email}</p>
        {account && (
          <div className="relative">
            <Avatar
              className="bg-sky-400 cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {account?.role[0]}
            </Avatar>
            {open && <ProfileDropDown />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
