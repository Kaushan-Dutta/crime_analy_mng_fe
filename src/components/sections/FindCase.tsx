"use client";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useCaseUtils } from "@/utils/agency/caseUtils";
import { useAuth } from "@/context/AuthContext";

const FindCase = () => {
  const { account } = useAuth();
  const { allCases } = useCaseUtils();
  const [openRequest, setOpenRequest] = useState<string | null>(null);
  console.log("All Cases", allCases);
  const dateFormat = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString();
  };
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono">
      {allCases?.map((_case: any) => (
        <div className="flex flex-col gap-5 justify-around  rounded-md text-md px-5 py-3 leading-5 border">
          <div className=" gap-3 justify-between flx-row ">
            <p className="w-1/5">{_case.name}</p>
            <p className="w-1/5">{dateFormat(_case.createdAt)}</p>
            <p className="w-1/5">{_case.pincode}</p>
            <div className="flx-row justify-center w-1/5">
              <span className="py-1 px-2  rounded-full  bg-ascent  text-white text-sm">
                {_case.type}
              </span>
            </div>
            <div className="flex-1">
              {account && _case.agency.id == account.id && (
                <Link href="/" className="flx-row gap-2 justify-center  w-1/5">
                  <IconButton>
                    <RemoveRedEyeIcon className="text-ascent" />
                  </IconButton>
                  View
                </Link>
              )}
              {account && _case.agency.id != account.id && (
                <IconButton
                  size="large"
                  color="primary"
                  onClick={() => {
                    if (openRequest === _case.id) setOpenRequest(null);
                    else setOpenRequest(_case.id);
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </IconButton>
              )}
            </div>
          </div>
          {account && _case.agency.id != account.id && openRequest==_case.id && (
            <div className="flex flex-col gap-5  rounded-md text-md px-5 py-3 leading-5 border">
              <TextField
                multiline
                rows={4}
                fullWidth
                margin="normal"
                label="Description"
              />
              <Button
                variant="contained"
                color="success"
                sx={{ width: "160px" }}
              >
                Send Req
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FindCase;


