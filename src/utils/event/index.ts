"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useEventApi } from '@/api/event';
import { useSearchParams, usePathname } from 'next/navigation';

export const useEvent = () => {

    const pathname = usePathname();

    const { Event } = useEventApi();

    const [event, setEvent] = useState<any>();

    const getEvent = useCallback(async (eventId: string) => {
        try {
            console.log("The event of the current",eventId);
            const res = await Event(eventId);
            console.log("The event of the current",res);
            setEvent(res);
        }
        catch (e: any) {
            console.log(e.message);
            toast.error(e.message)
        }
    },[])
    useEffect(() => {
        const eventId = pathname.split("/")[2];
        // console.log(eventId," as pathname");
        if (eventId) {
            getEvent(eventId);
        }
    }, [getEvent]);
    
    return {
        event
    }
};
