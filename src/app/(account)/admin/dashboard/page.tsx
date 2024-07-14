import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import Application from "@/components/sections/Application";

export default function Admin() {
  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row ">
        <Filter />
      </div>
      <h1 className="text-4xl font-bold"><Application/></h1>
    </div>
  );
}
