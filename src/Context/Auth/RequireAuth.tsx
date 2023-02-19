import { AuthContext } from "./AuthContext";
import {useContext} from "react"
import Login from "../../Pages/Login";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}: {children: JSX.Element}) =>{
    const auth = useContext(AuthContext);
    console.log(auth.user)

    if(!auth.user){
        return <Navigate to={'/Login'} /> 
    }
    
    return children;
}