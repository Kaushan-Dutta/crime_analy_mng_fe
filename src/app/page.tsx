import Navbar from "@/components/Navbar";
import { Button,Stack } from "@mui/material";

export default function Home() {
  return (
    <div className="font-rale">
      <section className="md:h-[90vh] h-screen bg-background1 container-large flex flex-col">
        <Navbar />
        <div className="flex-1 flx-row justify-center md:w-[90%] mx-auto">
          <div className="flex flex-col gap-10 text-center text-background">
              <p className="md:text-6xl text-4xl font-bold md:leading-[5rem] leading-[3rem]">CrimeWatch : Real-Time Insights, 
              Real Time Safety</p>
              <p className="md:text-lg text-base ">Alert Authorities Instantly When in Danger</p>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained"  color="error"  sx={{ width: '200px',height:'50px'}} className="tracking-widest text-2xl font-bold">ALERT</Button>
              </Stack>
          </div>
        </div>
      </section>
    </div>
  );
}
