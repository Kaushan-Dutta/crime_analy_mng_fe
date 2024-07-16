import React from 'react'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Alert = () => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
    <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <div className="flx-row gap-2">
          <p>Lat: 23</p>
          <p>Long: 23</p>
        </div>
        <p>2 mins ago</p>
        <Link href="/" className="w-1/5 flx-row gap-2">
          <span>
            <RemoveRedEyeIcon className="text-ascent" />
          </span>
          View
        </Link>
        <div className="flx-row gap-3">
        <Button variant="contained" size="small" color="success">Accept</Button>
        <Button variant="contained" size="small" color="error">Reject</Button>

        </div>
    </div>
    </div>
  )
}

export default Alert

