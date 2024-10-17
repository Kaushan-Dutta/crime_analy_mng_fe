import { gql, useQuery, useMutation } from '@apollo/client';

const GET_EVENT = gql`
query GetEvent($id:String!){
  getEvent(id:$id){
    statuscode
    message
    data
    success
  }
}

`

export const useEventApi = () => {

    const { refetch: getEvent } = useQuery(GET_EVENT);

    const Event = async (eventId: string) => {
        console.log("The event of the current in apis", eventId);

        const { data: { getEvent: res } } = await getEvent({
            id: eventId
        })
        console.log(res);
        return res.data
    }
    
    return {
        Event
    };
};

