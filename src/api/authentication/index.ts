import { gql, useQuery, useMutation } from '@apollo/client';

const LOGIN_QUERY = gql`
    query AccountLogin($email:String!,$password:String!){
        accountLogin(email:$email,password:$password){
        message,data
        }
    }
`
const CURR_ACCOUNT = gql`
    query GetAccount{
        getAccount{
            email
            role
            id
        }
}
`
const SIGNUP_MUTATION = gql`
    mutation Register($email:String!,$password:String!){
        register(email:$email,password:$password){
        message
        }
    }
`
const UPDATE_ACCOUNT=gql`
    mutation UpdateAccount( $name: String,$password: String, $phone: String){
        updateAccount(password:$password,name:$name,phone:$phone){
            message
        }
    }
`
export const useAuthentication = () => {
    const { refetch: login } = useQuery(LOGIN_QUERY);
    const { refetch: getAccount } = useQuery(CURR_ACCOUNT);
    const [signup] = useMutation(SIGNUP_MUTATION);
    const [updateAccount] = useMutation(UPDATE_ACCOUNT);

    const LoginApi = async (email: String, password: String) => {

        const { data: { accountLogin: res } } = await login({
            email: email, password: password,
        })
        return res
    }
    const GetAccountApi = async () => {
        const { data: { getAccount: res } } = await getAccount()
        return res
    }
    const SignupApi = async (email: String, password: String) => {
        const { data: { register: res } } = await signup({
            variables: { email: email, password: password, }
        })
        return res
    }
    const UpdateAccountApi = async (password?: String , name?: String, phone?: String ) => {
        console.log("Inside api name password phone",name,password,phone)
        const { data: { updateAccount: res } } = await updateAccount({
            variables: { password: password, name: name, phone: phone }
        })
        return res
    }
    return { LoginApi, GetAccountApi, SignupApi ,UpdateAccountApi}
}
