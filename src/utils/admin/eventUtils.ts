"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useAdminApis } from '@/api/admin';
import { useRouter } from 'next/navigation';

type UseAdminType = {
    agencies: {
        name: string;
        pincode: string;
        document: string;
        status: string;
    }[];
    events: {
        id: string;
        name: string;
        description: string;
        date: string;
        location: string;
    }[];

    eventForm: {
        label: string;
        type: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        multiline?: boolean;
    }[];
    handleEventCreation: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useAdminEvents = (): UseAdminType => {
    const router = useRouter();

    const { agencies, events,EventCreation } = useAdminApis();

    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [eventname, setEventName] = useState('');
    const [location, setLocation] = useState('');
   

    const memoizedAgencies = useMemo(() => agencies, [agencies]);
    const memoizedEvents = useMemo(() => events, [events]);

    const eventForm = [
        {
            label: 'Event Name',
            type: 'text',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setEventName(e.target.value);
            },
            value: eventname 
        },
        {
            label: 'Event Description',
            type: 'text',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value);
            },
            value: description,
            multiline: true,
            rows: 4
        },
        {
            label: 'Event Date',
            type: 'date',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setDate(e.target.value);
            },
            value: date
        },
        {
            label: 'Event Location',
            type: 'text',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setLocation(e.target.value);
            },
            value: location
        },

    ]

    const handleEventCreation = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            console.log(description, date, eventname, location);
            const resEvent = await EventCreation(description, date, eventname, location);
            // console.log(resEvent);
            toast.success(resEvent.message);
            console.log("Event created successfully");
        }
        catch(err:any){
            console.log(err.message);
            toast.error("Error in creating event");
        }
    }, [description, date, eventname, location]);    

    return {
        agencies: memoizedAgencies,
        events: memoizedEvents,
        eventForm,
        handleEventCreation,

    };
};
