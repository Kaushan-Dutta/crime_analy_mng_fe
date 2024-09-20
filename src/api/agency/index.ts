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
const GET_CASES=gql`
    query GetAgencyCases{
        getAgencyCases{
            id
            name
            createdAt
            status
            type            
        }
    }
`
const UPDATE_CASE_STATUS=gql`
    mutation UpdateCaseStatus($id:ID,$status:String){
        updateCaseStatus(id:$id,status:$status){
            message
        }
    }
`
export const useAgencyApis = () => {
    const { data: alerts } = useQuery(GET_ALERTS);
    const [register] = useMutation(REGISTER);
    const { refetch: getCases } = useQuery(GET_CASES);
    const [updateCaseStatus] = useMutation(UPDATE_CASE_STATUS);

    const AgencyRegister = async (email:string,pincode:string,document:string,latitude:string,longitude:string,phone:string,name:string,state:string,city:string) => {
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
                    state: state,
                    city: city
                }
            }
        })
        return res
    }
    const GetAgencyCases = async () => {
        const { data: { getAgencyCases: res } } = await getCases()
        console.log("Get Agency Caes",res)
        return res
    }

    const UpdateCaseStatus = async (id:string,status:string) => {
        const { data: { updateCaseStatus: res } } = await updateCaseStatus({
            variables: {
                id: id,
                status: status
            }
        })
        return res
    }
    return {
        alerts: alerts?.getAlerts,
        AgencyRegister,
        GetAgencyCases,
        UpdateCaseStatus
    };
};
