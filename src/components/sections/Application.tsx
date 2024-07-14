import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Application = () => {
  return (
    <div className="text-[17px] text-gray-800 flex-col flex gap-3">
      {/* <div className='flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white'>
            <p className='w-1/5'>Mahestala Station</p>
            <p className='w-1/5'>Newton Mela Ground Nrkelbazar</p>
            <Link href="/" className='w-1/5 flx-row gap-2'><span><RemoveRedEyeIcon className='text-ascent'/></span>View</Link>
            <p className='flx-row gap-2 w-1/5'><span><FiberManualRecordIcon className='text-green-500 text-sm'/></span>Pending</p>
            <IconButton size="large"  color="primary" aria-label="edit icon"><EditNoteIcon className='text-ascent'/></IconButton>
        </div>
        <div className='flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white'>
            <p className='w-1/5'>Mahestala Station</p>
            <p className='w-1/5'>Newton Mela Ground Nrkelbazar</p>
            <Link href="/" className='w-1/5 flx-row gap-2'><span><RemoveRedEyeIcon className='text-ascent'/></span>View</Link>
            <p className='flx-row gap-2 w-1/5'><span><FiberManualRecordIcon className='text-green-500 text-sm'/></span>Pending</p>
            <IconButton size="large"  color="primary" aria-label="edit icon"><EditNoteIcon className='text-ascent'/></IconButton>
        </div><div className='flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white'>
            <p className='w-1/5'>Mahestala Station</p>
            <p className='w-1/5'>Newton Mela Ground Nrkelbazar</p>
            <Link href="/" className='w-1/5 flx-row gap-2'><span><RemoveRedEyeIcon className='text-ascent'/></span>View</Link>
            <p className='flx-row gap-2 w-1/5'><span><FiberManualRecordIcon className='text-green-500 text-sm'/></span>Pending</p>
            <IconButton size="large"  color="primary" aria-label="edit icon"><EditNoteIcon className='text-ascent'/></IconButton>
        </div><div className='flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white'>
            <p className='w-1/5'>Mahestala Station</p>
            <p className='w-1/5'>Newton Mela Ground Nrkelbazar</p>
            <Link href="/" className='w-1/5 flx-row gap-2'><span><RemoveRedEyeIcon className='text-ascent'/></span>View</Link>
            <p className='flx-row gap-2 w-1/5'><span><FiberManualRecordIcon className='text-green-500 text-sm'/></span>Pending</p>
            <IconButton size="large"  color="primary" aria-label="edit icon"><EditNoteIcon className='text-ascent'/></IconButton>
        </div><div className='flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white'>
            <p className='w-1/5'>Mahestala Station</p>
            <p className='w-1/5'>Newton Mela Ground Nrkelbazar</p>
            <Link href="/" className='w-1/5 flx-row gap-2'><span><RemoveRedEyeIcon className='text-ascent'/></span>View</Link>
            <p className='flx-row gap-2 w-1/5'><span><FiberManualRecordIcon className='text-green-500 text-sm'/></span>Pending</p>
            <IconButton size="large"  color="primary" aria-label="edit icon"><EditNoteIcon className='text-ascent'/></IconButton>
        </div> */}
      {/* <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <p className="">
          Your case {"<"} Case Name {">"} have been accepted by {"<"}Police
          Station{">"}" .The case Id is CS0012331 , mailed to your registered
          email{" "}
        </p>
        <p>1hr</p>
      </div> */}
      {/* <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
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
      </div> */}
      {/* <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
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
            Rest assured that your event data is safe and secure with our web
            app. We prioritize data protection and employ industry-standard
          </p>
          <Button variant="contained" color="success" sx={{width:"160px"}}>
            Send Req
          </Button>
      </div> */}
      {/* <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
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
      </div> */}
      <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 bg-white">
        <Image
          src="/images/1.jpg"
          alt=""
          width={50}
          height={50}
          className="rounded-full "
        />
        <div className="">
          <p>Event Name</p>
          <p>24th Sep 2023</p>
        </div>
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

export default Application;
