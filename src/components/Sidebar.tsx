"use client";

import React from "react";
import Link from "next/link";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { Button, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CasesIcon from "@mui/icons-material/Cases";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PolicyIcon from "@mui/icons-material/Policy";
import EventIcon from "@mui/icons-material/Event";

const Sidebar = () => {
  return (
    <div className="pt-5 pb-10 px-5 flex flex-col gap-3  h-full bg-background1">
      <div className="block md:hidden flx-row justify-end ">
        <button className="relative left-11 p-2 hover:bg-background1 hover:bg-opacity-25 rounded-full">
          <ArrowForwardIosIcon className="text-3xl rounded-full p-2 bg-background1 text-ascent " />
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <Button className="w-full flx-row justify-start h-10 gap-2 text-background">
          <HomeIcon className="text-xl text-ascent" />
          Home
        </Button>
        <Button className="w-full flx-row justify-start h-10 gap-2 text-background">
          <SafetyCheckIcon className="text-xl text-ascent" />
          Alerts
        </Button>
        <Button className="w-full flx-row justify-start h-10 gap-2 text-background">
          <SettingsApplicationsIcon className="text-xl text-ascent" />
          Applications
        </Button>
        <Button className="w-full flx-row justify-start h-10 gap-2 text-background">
          <EventIcon className="text-xl text-ascent" />
          Events
        </Button>
        <Button className="w-full flx-row justify-start h-10 gap-2 text-background">
          <PolicyIcon className="text-xl text-ascent" />
          Search Case
        </Button>
        {/* <Button
          className="w-full flx-row justify-start h-10 gap-2 text-background"
        >
          <NotificationsIcon className="text-xl text-ascent"  />
          Notifications
        </Button>
        <Button
          className="w-full flx-row justify-start h-10 gap-2 text-background"
        >
          <NotificationsIcon className="text-xl text-ascent"  />
          Notifications
        </Button> */}
        <Button className="w-full flx-row justify-start h-10 gap-2 text-background">
          <NotificationsIcon className="text-xl text-ascent" />
          Notifications
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
