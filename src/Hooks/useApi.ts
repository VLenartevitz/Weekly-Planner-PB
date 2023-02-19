import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () =>({
    
    signin:async (email: string, password:string) =>{
        const response = await api.post('users/sign-in', {email, password},
        {headers: { 'Content-Type': 'application/json' }});
        return response.data;
    }
})