import { gql, useQuery, useMutation } from '@apollo/client';

const SEND_ALERT = gql`
    mutation PostAlert($latitude:String!,$longitude:String!){
        postAlert(latitude:$latitude,longitude:$longitude){
            message
        }
    }
`
const UPDATE_ALERT = gql`
    mutation UpdateAlert($id:ID!,$status:String!){
        updateAlert(id:$id,status:$status){
            message
        }
}
`
export const useAlertApi = () => {

    const [alert] = useMutation(SEND_ALERT);
    const [updateAlert] = useMutation(UPDATE_ALERT);

    const Alert = async (latitude: String, longitude: String) => {
        console.log("Alert Here", latitude, longitude)

        const { data: { postAlert: res } } = await alert({
            variables: { latitude: latitude, longitude: longitude, }
        })
        return res
    }
    const UpdateAlert = async (id: string, status: string) => {
        console.log(id, status, "From apis");

        const { data: { updateAlert: res } } = await updateAlert({
            variables: {
                id: id,
                status: status
            }
        })
        return res
    }
    return {
        Alert,
        UpdateAlert
    };
};

