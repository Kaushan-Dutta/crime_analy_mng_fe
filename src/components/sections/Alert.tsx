"use client";
import React, { MouseEvent, ReactHTMLElement } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useAgency } from "@/utils/agency";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAlert } from "@/utils/alerts";

const Alert = () => {
  const { alerts } = useAgency();
  const { updateAlert } = useAlert();

  // console.log("Alerts", alerts);
  const dateConverter = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleString();
  };
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono">
      {alerts?.map((alert,id) => (
        <div className="flx-row justify-between  rounded-md text-md px-5 py-3 gap-3 leading-5 border" key={id}>
          <div className="flx-row gap-2 w-1/4">
            <p>Lat: {alert?.latitude}</p>
            <p>Long: {alert?.longitude}</p>
          </div>
          <p className="w-1/4 ">{dateConverter(alert.createdAt)}</p>
          <Link href="/" className="w-1/4 flx-row gap-2  justify-center">
            <span>
              <RemoveRedEyeIcon className="text-ascent" />
            </span>
            View
          </Link>
          <div className="w-1/4 flx-row justify-center">
            {alert?.status == "APPROVED" || alert?.status == "REJECTED" ? (
              alert?.status == "APPROVED" ? (
                <IconButton size="large" color="primary" aria-label="edit icon">
                  <VerifiedIcon className="text-green-600" />
                </IconButton>
              ) : (
                <IconButton size="large" color="primary" aria-label="edit icon">
                  <CancelIcon className="text-ascent" />
                </IconButton>
              )
            ) : (
              <div className="flx-row gap-3">
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    updateAlert(alert.id, "APPROVED");
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    updateAlert(alert.id, "REJECTED");
                  }}
                >
                  Reject
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alert;
