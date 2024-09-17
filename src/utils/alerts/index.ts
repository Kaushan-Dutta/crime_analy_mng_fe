"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAlertApi } from '@/api/alert';

type LocationType ={
    latitude:string;
    longitude:string;
}
export const useAlert = () => {
    const router = useRouter();
    const [location, setLocation] = useState<LocationType | null>(null);
    const { Alert,UpdateAlert } = useAlertApi();

    const handleLocation = useCallback(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({latitude:String(position.coords.latitude),longitude:String(position.coords.longitude)});
            });
        } else {
            toast.error("Geolocation not available");
        }
    }, [location])

    const handleAlert = useCallback(async() => {
        try{
            console.log("Alert Here")
            const resAlert=await Alert(location?.latitude!,location?.longitude!);
            toast.success(resAlert.message)
        }
        catch(err){
            toast.error("Error in sending alert")
        }
    },[location])

    const updateAlert = async(id:string,status:string) => {
        console.log("Alert Here",id,status)
        try{
            await UpdateAlert(id,status);
            toast.success("Alert Updated")
        }
        catch(err){
            toast.error("Error in updating alert")
        }
    }
    return {
        location,
        handleLocation,
        handleAlert,
        updateAlert
    };
};
