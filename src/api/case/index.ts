import { gql, useQuery, useMutation } from '@apollo/client';

const GET_CASE = gql`
query GetCase($id: String!) {
  getCase(id: $id) {
      id
      type
      name
      phone
      pincode
      account{
        id
        name
      }
      evidence {
        id
        url
        description
        file
        caseId
      }
    
    agency {
      id
      name
    }
  }
}

`
const CASE_REGISTER = gql`
    mutation UpdateCase($data:[EvidenceInput],$caseId:String!){
        updateCase(data:$data,caseId:$caseId){
            message
        }
    }
`
type EvidenceInput = {
    id?: string
    url?: string
    file?: string
    description?: string
    caseId?: string
}
export const useCaseApi = () => {

    const { refetch: getCase } = useQuery(GET_CASE);
    const [caseRegister] = useMutation(CASE_REGISTER);

    const Case = async (caseId: string) => {
        // console.log("The case of the current in apis", caseId);

        const { data: { getCase: res } } = await getCase({
            id: caseId
        })
        // console.log(res);
        return res
    }
    const CaseUpdate = async (evidence: EvidenceInput[], caseId: string) => {
        console.log(evidence, caseId);
        const { data: { caseRegister: res } } = await caseRegister({
            variables: {
                data: evidence,
                caseId: caseId
            }
        })
        return res
    }
    return {
        Case, CaseUpdate
    };
};

