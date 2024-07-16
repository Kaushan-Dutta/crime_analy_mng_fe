import React,{useState} from 'react'
import { Button, TextField ,Stack} from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';
import {useGeolocation, useStartTyping} from 'react-use';

const Location:React.FC = () => {
  const [location,setLocation] = useState<string>("Set Location"); 

  return (
    <div className="flex flex-col gap-5">
        <TextField
          label="Enter Agency Name"
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
        />
        <TextField
          label="Enter your address"
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
        />
        <Stack direction="row" gap="10px">
            <Button variant="contained" color="error" sx={{width:"200px",h:"20px"}} onClick={()=>{
              if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                  console.log("longitude",position)
                  setLocation(position.coords.latitude + " " + position.coords.longitude);
                });
              } else {
                console.log("Geolocation is not available in your browser.");
              }
            }}>
                {location}
            </Button>
            <Button variant="text" color="info" sx={{width:"20px",h:"20px"}} >
                <CachedIcon/>
            </Button>
        </Stack>

      </div>
  )
}

export default Location
// navigator.geolocation.getCurrentPosition(
//   (position) => {
//       console.log(
//           'You are ',
//           geolib.getDistance(position.coords, {
//               latitude: 51.525,
//               longitude: 7.4575,
//           }),
//           'meters away from 51.525, 7.4575'
//       );
//   },
//   () => {
//       alert('Position could not be determined.');
//   }
// );