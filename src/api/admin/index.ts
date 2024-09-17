import { gql, useQuery,useMutation } from '@apollo/client';

const GET_AGENCY_FORMS = gql`
    query GetAgencyForms{
        getAgencyForms{
            id
            name
            pincode
            document
            status
            phone
            latitude
            longitude
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
const CREATE_EVENT = gql`
    mutation CreateEvent($data:EventInput){
        createEvent(data:$data){
            message
        }
    }
`

const UPDATE_AGENCY_STATUS = gql`
    mutation UpdateAgencyFormStatus($id:ID,$status:ApplicationStatus){
        updateAgencyFormStatus(id:$id,status:$status){
            message
        }
    }
`
export const useAdminApis = () => {
    const { data: agenciesData } = useQuery(GET_AGENCY_FORMS);
    const { data: eventsData } = useQuery(GET_EVENTS);
    const [createEvent] = useMutation(CREATE_EVENT);
    const [updateAgencyStatus] = useMutation(UPDATE_AGENCY_STATUS);

    const EventCreation = async (description:string,date:string,name:string,location:string) => {

        const { data: { createEvent: res } } = await createEvent({
            variables: {
                data: {
                    description:description,
                    date:date,
                    name:name,
                    location:location
                }
            }
        })
        return res
    }

    const UpdateAgencyStatus = async (id:string,status:string) => {
        console.log(id,status,"From apis");

        const { data: { updateAgencyFormStatus: res } } = await updateAgencyStatus({
            variables: {
                id:id,
                status:status
            }
        })
        return res
    }
    return { 
        agencies: agenciesData?.getAgencyForms, 
        events: eventsData?.getEvents,
        EventCreation,
        UpdateAgencyStatus
    };
};

