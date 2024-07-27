import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend Day.js with the relativeTime plugin
dayjs.extend(relativeTime);

export type EventType = {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
};

type EventProps = {
  events: EventType[];
};

const Event: React.FC<EventProps> = ({ events }) => {
  const convertDate = (date: string) => {
      return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  }

  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      {events &&
        events.length > 0 &&
        events.map((item) => (
          <div key={item?.id} className="flx-row justify-between  rounded-md text-md px-5 py-3 leading-5 border">
            <div className="flx-row gap-5 w-1/3 ">
              <Image
                src="/images/1.jpg"
                alt=""
                width={50}
                height={50}
                className="rounded-full "
              />
              <div className="flx-row gap-3  justify-center">
                <p>{item?.name}</p>
                <p className="text-sm">( {item?.location} )</p>
              </div>
            </div>
            <p>{convertDate(item?.date)}</p>

            <Link href="/" className=" flx-row gap-2 w-1/3 justify-center">
              <span>
                <RemoveRedEyeIcon className="text-ascent" />
              </span>
              View
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Event;
