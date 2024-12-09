import { gql, useQuery, useMutation } from '@apollo/client';
import { useAuth } from '@/context/AuthContext';
const GET_ALERTS = gql`
    query GetAlerts{
        getAlerts{
            statuscode
            message
            data
    }
}
`
const REGISTER = gql`
    mutation AgencyRegister($data:AgencyApplyForm){
        agencyRegister(data:$data){
            statuscode
            message
            data
        }
    }
`
const GET_CASES = gql`
    query GetAgencyCases{
        getAgencyCases{
            statuscode
            message
            data            
        }
    }
`

const GET_ALL_CASES = gql`
    query GetAllCases{
        getAllCases{
            statuscode
            message
            data
        }
    }
`
const UPDATE_CASE_STATUS = gql`
    mutation UpdateCaseStatus($id:ID,$status:String){
        updateCaseStatus(id:$id,status:$status){
            statuscode
            message
            data
        }
    }
`
export const useAgencyApis = () => {
    const { account } = useAuth();
    const { data: alerts } = useQuery(GET_ALERTS);

    const [register] = useMutation(REGISTER);
    const { refetch: getCases } = useQuery(GET_CASES, { skip: true });
    const { refetch: getAllCases } = useQuery(GET_ALL_CASES, { skip: true });
    

    const [updateCaseStatus] = useMutation(UPDATE_CASE_STATUS);

    const AgencyRegister = async (email: string, pincode: string, document: string, latitude: string, longitude: string, phone: string, name: string, state: string, city: string) => {
        console.log(email, pincode, document, "Latitude ", latitude, "longitude ", longitude, phone, name)

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
        return res.data
    }
    const GetAgencyCases = async () => {
        const { data: { getAgencyCases: res } } = await getCases()
        console.log("Get Agency Cases", res)
        return res.data
    }
    const GetAllCases = async () => {
        const { data: { getAllCases: res } } = await getAllCases()
        console.log("Get All Cases", res)
        return res.data

    }

    const UpdateCaseStatus = async (id: string, status: string) => {
        const { data: { updateCaseStatus: res } } = await updateCaseStatus({
            variables: {
                id: id,
                status: status
            }
        })
        return res.data
    }

    const RequestCase=async(caseId:string,requestMessage:string)=>{
        console.log("Case Id is ",caseId,"Request Message is ",requestMessage);
    }
    return {
        alerts: alerts?.getAlerts?.data,
        AgencyRegister,
        GetAgencyCases,
        GetAllCases,
        UpdateCaseStatus,
        RequestCase
    };
};
