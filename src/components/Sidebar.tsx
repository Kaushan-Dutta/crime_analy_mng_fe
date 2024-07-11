"use client";

import React from "react";
import Link from "next/link";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { Button, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CasesIcon from "@mui/icons-material/Cases";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Sidebar = () => {
  return (
    <div className="pt-5 pb-10 px-5 flex flex-col  h-full ">
      <div className="flx-row justify-end">
        <IconButton>
          <TurnLeftIcon className="text-3xl" />
        </IconButton>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <Button
          variant="text"
          color="success"
          className="w-full flx-row justify-start h-10 gap-2"
        >
          <HomeIcon className="text-xl" />
          Home
        </Button>
        <Button
          variant="text"
          color="success"
          className="w-full flx-row justify-start h-10 gap-2"
        >
          <NotificationsIcon className="text-xl" /> Notifications
        </Button>
        <Button
          variant="text"
          color="success"
          className="w-full flx-row justify-start h-10 gap-2"
        >
          <CasesIcon className="text-xl" />
          Messages
        </Button>
      </div>
      <div className="flex flex-col ">
        <Button variant="contained" color="error" className="w-full h-10">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
