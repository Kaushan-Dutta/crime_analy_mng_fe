"use client";

import React,{memo} from "react";
import Link from "next/link";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { SideBarLinks } from "@/config/routes";

import { useAuth } from "@/context/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = memo(() => {
  const { account } = useAuth();

  if (!account) {
    return null;
  }
  
  return (
    <div className="pt-5 pb-10 px-5 flex flex-col gap-3  h-full bg-background1 rounded-lg">
     
      <div className="flex-1 flex flex-col gap-5 items-center md:items-start">
        {SideBarLinks.filter((link) => link.role.includes(account?.role.toLowerCase())).map(
          (link, id) => (
            <Link href={`/${account?.role.toLowerCase()}/dashboard/${link.link}`} passHref  key={id}>
              <Button
               
                className="w-full flx-row md:justify-start justify-center h-10 gap-2 text-background"
              >
                <span >{link.icon}</span>
                <span className="md:inline hidden">{link.title}</span>
              </Button>
            </Link>
          )
        )}
      </div>
      <div className="flex flex-col cursor-pointer">
        <Button variant="contained" color="error" className="w-full h-10 hidden md:inline">
          Logout
        </Button>
        <IconButton className="md:hidden">
          <LogoutIcon className="text-ascent"/>
        </IconButton>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

export default Sidebar;
