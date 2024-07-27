import { gql, useQuery } from '@apollo/client';

const GET_AGENCY_FORMS = gql`
    query GetAgencyForms{
        getAgencyForms{
            name
            pincode
            document
            status
        }
    }
`;

const GET_EVENTS = gql`
    query GetEvents{
        getEvents{
            id
            name
            description
            date
            location
        }
    }
`;

export const adminApis = () => {
    const { data: agenciesData } = useQuery(GET_AGENCY_FORMS);
    const { data: eventsData } = useQuery(GET_EVENTS);

    return { 
        agencies: agenciesData?.getAgencyForms, 
        events: eventsData?.getEvents,
    };
};

