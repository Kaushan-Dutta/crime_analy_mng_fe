"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useAdminApis } from '@/api/admin';
import { useRouter } from 'next/navigation';


export const useAdminEvents = () => {
    const router = useRouter();

    const {  events,EventCreation } = useAdminApis();

    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [eventname, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

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
        {
            label: 'Start Time',
            type: 'text',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setStartTime(e.target.value);
            },
            value: startTime
        },
        {
            label: 'End Time',
            type: 'text',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setEndTime(e.target.value);
            },
            value: endTime
        }
    ]

    const handleEventCreation = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            console.log(description, date, eventname, location);
            await EventCreation(description, date, eventname, location, startTime,endTime);
            toast.success("Event created successfully");
        }
        catch(err:any){
            console.log(err.message);
            toast.error("Error in creating event");
        }
    }, [description, date, eventname, location]);    

    return {
        events: memoizedEvents,
        eventForm,
        handleEventCreation
    };
};
