import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const FindCase = () => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <p className="w-1/5">CS002242</p>
        <p className="w-1/5">Crime Name in short</p>
        <p className="w-1/5">24th Dec 2024</p>
        <p className="w-1/5">Kolkata, Bengal</p>
        <div className=" w-1/5 gap-3 justify-end flx-row ">
          <p className="py-1 px-2   rounded-full  bg-ascent  text-white text-sm">
            Cyber
          </p>
          <IconButton size="large" color="primary">
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="flx-row justify-between gap-10  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <p>
          Rest assured that your event data is safe and secure with our web app.
          We prioritize data protection and employ industry-standard
        </p>
        <Button variant="contained" color="success" sx={{ width: "160px" }}>
          Send Req
        </Button>
      </div>
    </div>
  );
};

export default FindCase;
