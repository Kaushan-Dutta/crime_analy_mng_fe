import { gql, useQuery, useMutation } from '@apollo/client';

const GET_NOTIFICATIONS = gql`
    query GetNotifications{
        getNotifications{
           statuscode
           message
           data
        }
    }

`

export const useNotificationApi = () => {

    const { data: notifications } = useQuery(GET_NOTIFICATIONS);

    return { notifications:notifications?.getNotifications?.data }
}
