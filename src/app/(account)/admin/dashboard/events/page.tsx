"use client"
import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import Event from "@/components/sections/Event";
import { useAdmin } from "@/utils/admin";

export default function Admin() {
  const { events } = useAdmin();

  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row ">
        <Filter props={["By Date"]} />
      </div>
      <Event  events={events}/>
    </div>
  );
}
