import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Event = () => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      <div className="flx-row justify-between  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <div className="flx-row gap-5">
        <Image
          src="/images/1.jpg"
          alt=""
          width={50}
          height={50}
          className="rounded-full "
        />
        <div className="flx-row gap-3">
          <p>Event Name</p>
          <p className="text-sm">( Jharkhand,Ranchi )</p>
        </div>
        </div>
        <p >24th Sep 2024</p>

        <Link href="/" className="w-1/5 flx-row gap-2">
          <span>
            <RemoveRedEyeIcon className="text-ascent" />
          </span>
          View
        </Link>
      </div>
      
    </div>
  );
};

export default Event;
