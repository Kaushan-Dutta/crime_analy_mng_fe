"use client";
import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import AgencyApplication from "@/components/sections/AgencyApplication";
import { useAgencyUtils } from "@/utils/admin/agencyUtils";
export default function Admin() {
  const { agencies } = useAgencyUtils();

  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row ">
        <Filter props={["By Date", "By Status"]} />
      </div>
      <AgencyApplication agencies={agencies} />
    </div>
  );
}
