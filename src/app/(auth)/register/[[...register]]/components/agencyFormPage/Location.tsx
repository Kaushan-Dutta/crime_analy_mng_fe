import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import { useAgency } from "@/utils/agency";
import { useAlert } from "@/utils/alerts";

const Location = ({ pageId }: { pageId: number }) => {
  const { agencyForm } = useAgency();
  const { handleLocation, location } = useAlert();

  return (
    <div className="flex flex-col gap-5">
      {agencyForm[0].formList.map((field, id) => (
        <TextField
          key={id}
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
          {...field}
        />
      ))}

      <Stack direction="row" gap="10px">
        <Button
          variant="contained"
          color="error"
          sx={{ width: "200px", h: "20px" }}
          onClick={handleLocation}
        >
          {location
            ? "Lat: " + location?.latitude + " Long: " + location?.longitude
            : "Set Location"}
        </Button>
      </Stack>
    </div>
  );
};

export default Location;
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
