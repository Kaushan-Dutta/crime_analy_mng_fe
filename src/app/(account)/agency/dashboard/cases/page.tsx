import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import FindCase from "@/components/sections/FindCase";

export default function Admin() {
  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row ">
        <Filter props={["By Date"]} />
      </div>
      <FindCase />
    </div>
  );
}
