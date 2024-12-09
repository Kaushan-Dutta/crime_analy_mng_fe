import { LocationType } from "./location.type";

export type AgencyType = {
    id: string;
    name?: string;
    document?: string;
    status: string;
    phone?: string;
    location: LocationType;
};
  
export type AgencyApplicationProps = {
    agencies: AgencyType[];
};