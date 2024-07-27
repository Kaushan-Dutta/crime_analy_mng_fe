"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


type LocationType ={
    latitude:string;
    longitude:string;
}
export const useAlert = () => {
    const router = useRouter();
    const [location, setLocation] = useState<LocationType | null>(null);


    const handleLocation = useCallback(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({latitude:String(position.coords.latitude),longitude:String(position.coords.longitude)});
            });
        } else {
            toast.error("Geolocation not available");
        }
    }, [location])


    return {
        location,
        handleLocation
    };
};
