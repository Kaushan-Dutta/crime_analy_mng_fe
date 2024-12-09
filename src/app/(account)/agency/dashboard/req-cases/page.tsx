import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import { Button,Checkbox } from "@mui/material";
import ReqCase from "@/components/sections/ReqCase";

export default function Admin() {
  return (
    <div className="flex-col gap-10 flex">
      <div className="w-2/3 mx-auto">
        <Searchbar />
      </div>
      <div className="flx-row justify-between">
        <Filter props={["By Date"]} />
        <Button variant="outlined" color="primary" className="rounded-full">
          <Checkbox
            color="error"
            inputProps={{ "aria-label": "controlled" }}
          />
          Requests
        </Button>
      </div>
      <ReqCase cases={[]}/>
    </div>
  );
}
