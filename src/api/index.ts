import axios from 'axios'

export const serverProxy = () => {
    return axios.create({
        baseURL: process.env.NODE_ENV + 'graphql',
    })
}
export const serverProxyWithAuth = () => {
    return axios.create({
        baseURL: process.env.NODE_ENV + 'graphql',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}