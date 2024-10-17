import { gql, useQuery, useMutation } from '@apollo/client';

const GET_AGENCY_FORMS = gql`
    query GetAgencyForms{
    getAgencyForms{
        statuscode
        message
        data
    }
}
`;

const GET_EVENTS = gql`
    query GetEvents{
    getEvents{
        message
        statuscode
        data
        success
    }
}
`;
const CREATE_EVENT = gql`
    mutation CreateEvent($data:EventInput!){
    createEvent(data:$data){
        statuscode
        message
        data
    }
}
`

const UPDATE_AGENCY_STATUS = gql`
    mutation UpdateAgencyFormStatus($id:ID,$status:ApplicationStatus){
        updateAgencyFormStatus(id:$id,status:$status){
            statuscode
            message
            data
        }
    }
`
export const useAdminApis = () => {
    const { data: agenciesData } = useQuery(GET_AGENCY_FORMS);
    const { data: eventsData } = useQuery(GET_EVENTS);
    const [createEvent] = useMutation(CREATE_EVENT);
    const [updateAgencyStatus] = useMutation(UPDATE_AGENCY_STATUS);

    const EventCreation = async (description: string, date: string, name: string, location: string, startTime: string, endTime: string) => {

        const { data: { createEvent: res } } = await createEvent({
            variables: {
                data: {
                    description: description,
                    date: date,
                    name: name,
                    location: location,
                    startTime: startTime,
                    endTime: endTime
                }
            }
        })
        return res.data
    }

    const UpdateAgencyStatus = async (id: string, status: string) => {
        console.log(id, status, "From apis");

        const { data: { updateAgencyFormStatus: res } } = await updateAgencyStatus({
            variables: {
                id: id,
                status: status
            }
        })
        return res.data
    }
    return {
        agencies: agenciesData?.getAgencyForms?.data,
        events: eventsData?.getEvents?.data,
        EventCreation,
        UpdateAgencyStatus
    };
};

