import { gql, useQuery,useMutation } from '@apollo/client';

const GET_ALERTS = gql`
    query GetAlerts{
        getAlerts{
        id,
        latitude,
        longitude,
        status,
        createdAt
    }
}
`
const REGISTER=gql`
    mutation AgencyRegister($data:AgencyApplyForm){
        agencyRegister(data:$data){
            message
        }
    }
`
export const useAgencyApis = () => {
    const { data: alerts } = useQuery(GET_ALERTS);
    const [register] = useMutation(REGISTER);

    const AgencyRegister = async (email:string,pincode:string,document:string,latitude:string,longitude:string,phone:string,name:string) => {
        console.log(email,pincode,document,"Latitude ",latitude,"longitude ",longitude,phone,name)

        const { data: { agencyRegister: res } } = await register({
            variables: {
                data: {
                    email: email,
                    pincode: pincode,
                    document: document,
                    name: name,
                    phone: phone,
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                }
            }
        })
        return res
    }
    return {
        alerts: alerts?.getAlerts,
        AgencyRegister
    };
};
