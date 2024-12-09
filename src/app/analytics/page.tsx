import { Button, TextField } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";
import SearchAreaFilter from "@/components/SearchAreaFilter";

export default function Analytics() {
  return (
    <div className=" container-medium flex flex-col  text-center gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-5xl font-rale">Search Crime Analysis Record</p>
        <p>Analyze your locality and get the report of the crime data</p>
      </div>
      <SearchAreaFilter />
      <div className="flex flex-col  gap-10 px-10">
        <div className=" bg-green-200   rounded-lg border h-80"></div>
        <div className=" flex-col flex gap-5  text-left">
          <div className="flx-row  gap-5 justify-center">
            <Button variant="contained" color="success" className="rounded-full">Case count: 234 </Button>
          </div>

          <div className="flex flex-row   gap-5 justify-between">
            <div className="flex flex-col   ">
              <Gauge width={90} height={90} value={60} />
              <p className="text-center">Cyber</p>
            </div>
            <div className="flex flex-col  ">
              <Gauge width={90} height={90} value={60} />
              <p className="text-center">Kidnapping</p>
            </div>
            <div className="flex flex-col  ">
              <Gauge width={90} height={90} value={60} />
              <p className="text-center">Theft</p>
            </div>
            <div className="flex flex-col  ">
              <Gauge width={90} height={90} value={60} />
              <p className="text-center">Missing</p>
            </div>
            <div className="flex flex-col  ">
              <Gauge width={90} height={90} value={60} />
              <p className="text-center">Other</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
