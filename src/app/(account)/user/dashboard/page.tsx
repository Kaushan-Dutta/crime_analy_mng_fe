import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import Case from "@/components/sections/Case";

export default function User() {
  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row ">
        <Filter props={["By Date", "By Status"]} />
      </div>
      <Case />
    </div>
  );
}
