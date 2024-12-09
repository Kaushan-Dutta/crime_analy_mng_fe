import {LocationType} from './location.type'

export type EventType = {
    id: string;
    name: string;
    description: string;
    date: string;
    location:LocationType ;
    startTime: string;
    endTime: string;
    venue:string
};

export type EventProps = {
    events: EventType[];
};