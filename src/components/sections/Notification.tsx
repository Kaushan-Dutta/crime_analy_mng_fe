import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Notification = () => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <p className="">
          Your case {"<"} Case Name {">"} have been accepted by {"<"}Police
          Station{">"}" .The case Id is CS0012331 , mailed to your registered
          email{" "}
        </p>
        <p>1hr</p>
      </div>
    </div>
  );
};

export default Notification;
