"use client";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useAgency } from "@/utils/agency";

const Alert = () => {
  const { alerts } = useAgency();
  console.log("Alerts",alerts);
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      {alerts?.map((alert) => (
        <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 border">
          <div className="flx-row gap-2">
            <p>Lat: {alert?.latitude}</p>
            <p>Long: {alert?.longitude}</p>
          </div>
          <p>2 mins ago</p>
          <Link href="/" className="w-1/5 flx-row gap-2">
            <span>
              <RemoveRedEyeIcon className="text-ascent" />
            </span>
            View
          </Link>
          <div className="flx-row gap-3">
            <Button variant="contained" size="small" color="success">
              Accept
            </Button>
            <Button variant="contained" size="small" color="error">
              Reject
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alert;
