import { gql, useQuery, useMutation } from '@apollo/client';

const GET_AGENCY_FORMS = gql`
    query GetAgencyForms{
        getAgencyForms{
            name
            pincode
            document
            status
        }
    }
`
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
`
export const adminApis = () => {
    const { data:agencies  } = useQuery(GET_AGENCY_FORMS);
    const { data:events  } = useQuery(GET_EVENTS);
       
    return { agencies: agencies?.getAgencyForms, events: events?.getEvents }
}
