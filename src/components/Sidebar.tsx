"use client";

import React,{memo} from "react";
import Link from "next/link";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { SideBarLinks } from "@/config/routes";

import { useAuth } from "@/context/AuthContext";

const Sidebar = memo(() => {
  const { account } = useAuth();

  if (!account) {
    return null;
  }
  
  return (
    <div className="pt-5 pb-10 px-5 flex flex-col gap-3  h-full bg-background1">
      <div className="block md:hidden flx-row justify-end ">
        <button className="relative left-11 p-2 hover:bg-background1 hover:bg-opacity-25 rounded-full">
          <ArrowForwardIosIcon className="text-3xl rounded-full p-2 bg-background1 text-ascent " />
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        {SideBarLinks.filter((link) => link.role.includes(account.role)).map(
          (link, id) => (
            <Link href={`/${account.role}/dashboard/${link.link}`} passHref  key={id}>
              <Button
               
                className="w-full flx-row justify-start h-10 gap-2 text-background"
              >
                {link.icon}
                {link.title}
              </Button>
            </Link>
          )
        )}
      </div>
      <div className="flex flex-col ">
        <Button variant="contained" color="error" className="w-full h-10">
          Logout
        </Button>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

export default Sidebar;
