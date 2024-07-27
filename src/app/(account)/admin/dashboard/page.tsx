"use client"
import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import AgencyApplication from "@/components/sections/AgencyApplication"
import { useAdmin } from "@/utils/admin";
export default function Admin() {
  
  const { agencies } = useAdmin();

  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row ">
        <Filter props={["By Date", "By Status"]} />
      </div>
      <AgencyApplication agencies={agencies}/>
    </div>
  );
}
