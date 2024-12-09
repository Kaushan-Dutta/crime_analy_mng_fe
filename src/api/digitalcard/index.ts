import { gql, useQuery, useMutation } from '@apollo/client';

const GET_CARD = gql`
    query GetCard{
    getCard{
      statuscode,
      message,
      data
    }
}
`
const CREATE_CARD = gql`
    mutation CreateCard($data:DigitalCardInput!){
        createCard(data:$data){
        statuscode,
        message,
        data
        }
    }

`

export const useCardApi = () => {

    const { data: cardData } = useQuery(GET_CARD);
    const [createcard] = useMutation(CREATE_CARD);


    const createCard = async (data: DigitalCardInput) => {
        console.log("inside create card", data);
        const { data: { createCard: res } } = await createcard({
            variables: {
                data: data
            }
        })
        console.log("res", res);
        return res
    }
    return {card:cardData?.getCard?.data,createCard}

};

