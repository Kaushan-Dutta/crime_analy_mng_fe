import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Case = () => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <p className="w-1/5">Case Name Registered</p>
        <p className="w-1/5">24th Sep 2024</p>

        <Link href="/" className="w-1/5 flx-row gap-2">
          <span>
            <RemoveRedEyeIcon className="text-ascent" />
          </span>
          View
        </Link>
        <p className="flx-row gap-2 w-1/5">
          <span>
            <FiberManualRecordIcon className="text-green-500 text-sm" />
          </span>
          Pending
        </p>

        <IconButton size="large" color="primary" aria-label="edit icon">
          <SearchOutlinedIcon />
        </IconButton>
      </div>
      <div className="flex flex-col gap-3  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <TextField
          label="Description"
          variant="outlined"
          size="small"
          required
          multiline={true}
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="success" sx={{ width: "160px" }}>
          Send Req
        </Button>
      </div> 
    </div>
  );
};

export default Case;
