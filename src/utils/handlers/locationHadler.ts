import { CoordinateType } from "@/types/location.type";

export function getCurrentPosition(setLocation:React.Dispatch<React.SetStateAction<CoordinateType  | null>>){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocation({latitude:String(position.coords.latitude),longitude:String(position.coords.longitude)});
        });
    } else {
        throw new Error("Geolocation not available");
    }
}