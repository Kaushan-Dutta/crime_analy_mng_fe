import { gql, useQuery ,useMutation} from '@apollo/client';
import { EvidenceType } from '@/utils/user/caseUtils';
import { get } from 'http';

const CASE_REGISTER=gql`
    mutation CaseRegister($data:CaseFormInput){
        caseRegister(data:$data){
            message
        }
    }
`
const GET_CASES=gql`
    query GetUserCases($data:CaseFilterType){
        getUserCases(data:$data){
            id
            name
            createdAt
            status
            type            
        }
    }
`
// id: String
//         accountId: String
//         status: CaseStatus
//         agencyId: String
//         userId: String
//         createdAt: String
//         type: CaseType
export const useUserApis = () => {

    const [caseRegister] = useMutation(CASE_REGISTER);
    const { refetch: getCases } = useQuery(GET_CASES);

    const CaseRegister = async (caseType:string,name:string,phone:string,pincode:string,evidence:EvidenceType[]) => {
        console.log(caseType,name,phone,pincode,evidence);
        const { data: { caseRegister: res } } = await caseRegister({
            variables: {
                data: {
                    type:caseType,
                    name:name,
                    phone:phone,
                    pincode:pincode,
                    evidence:evidence
                }
            }
        })
        return res
    }
    const GetUserCases = async () => {
        const { data: { getUserCases: res } } = await getCases(
            // {
            //     data: {
            //         status: "PENDING"
            //     }
            // }
        )
        return res
    }

    return {
        CaseRegister,GetUserCases
    };
    
};
 