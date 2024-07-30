import { gql, useQuery ,useMutation} from '@apollo/client';

const SEND_ALERT = gql`
    mutation PostAlert($latitude:String!,$longitude:String!){
        postAlert(latitude:$latitude,longitude:$longitude){
            message
        }
    }
`

export const useAlertApi = () => {

    const [alert]=useMutation(SEND_ALERT);

    const Alert = async (latitude: String, longitude: String) => {
        console.log("Alert Here",latitude,longitude)

        const { data: { postAlert: res } } = await alert({
            variables: { latitude: latitude, longitude: longitude, }
        })
        return res
    }

    return {
        Alert
    };
};

