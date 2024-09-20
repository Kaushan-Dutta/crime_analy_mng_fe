"use client"
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNotification } from "@/utils/notification";

const Notification = () => {
  const { notifications } = useNotification();
  console.log("Notifications", notifications);
  const dateConverter = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleString();
  }
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono ">
      {notifications?.map((notification: any) => (
        <div className="flx-row justify-between gap-5 rounded-md text-md px-5 py-3 leading-5  border">
          <p className="">
            {notification.message}
          </p>
          <p>{dateConverter(notification.createdAt)}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
