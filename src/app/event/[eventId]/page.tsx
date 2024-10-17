"use client";
import { notFound } from "next/navigation";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { TextField, IconButton, Button } from "@mui/material";
import { useEffect } from "react";
import { useEvent } from "@/utils/event";
import Image from "next/image";

export default function Event({ params, searchParams }: any) {
  const { event } = useEvent();
  console.log("Event", params, searchParams, event);
  return <div className="flex-col mt-28 gap-10 flex ">
    <div className="flx-row justify-between gap-10 h-64">
        <div className="border rounded-lg w-2/3 h-full">
            {/* <Image src="https://picsum.photos/id/237/200/300" alt="event" width={100} height={100}/> */}
        </div>
        <div className="border rounded-lg p-5 w-1/3 h-full flex flex-col justify-center">
            <p className="flex-1">{event?.location}</p>
            <Button variant="contained" color="primary" className="rounded-lg">
                RSPV Now
            </Button>
        </div>
    </div>
    <div className="flex flex-col gap-5">
    <h1 className="text-2xl">{event?.name}</h1>
    <p>{event?.description}</p>
    </div>
  </div>
}
