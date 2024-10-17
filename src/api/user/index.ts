import { gql, useQuery ,useMutation} from '@apollo/client';
import { EvidenceType } from '@/utils/user/caseUtils';

const CASE_REGISTER=gql`
    mutation CaseRegister($data:CaseFormInput){
        caseRegister(data:$data){
            statuscode
            message
            data
        }
    }
`
const GET_CASES=gql`
    query GetUserCases{
        getUserCases{
            statuscode
            message
            data          
        }
    }
`

export const useUserApis = () => {

    const [caseRegister] = useMutation(CASE_REGISTER);
    const { data: cases } = useQuery(GET_CASES);

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
        return res.data
    }
    
    return {
        CaseRegister,cases:cases?.getUserCases?.data
    };
    
};
 