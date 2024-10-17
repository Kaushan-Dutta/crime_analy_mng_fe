import axios from 'axios'
export const serverProxy = () => {

    return axios.create({
        baseURL: 'https://crime-analy-mng-be.vercel.app/' + 'graphql',
    })
}
export const serverProxyWithAuth = () => {

    return axios.create({
        baseURL: 'https://crime-analy-mng-be.vercel.app/' + 'graphql',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}