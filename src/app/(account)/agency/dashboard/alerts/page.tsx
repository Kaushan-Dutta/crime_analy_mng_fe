import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import Alert from "@/components/sections/Alert";

export default function Admin() {
  return (
    <div className="flex-col gap-10 flex">
      <div className="flx-row ">
        <Filter props={["By Time"]} />
      </div>
      <Alert />
    </div>
  );
}
