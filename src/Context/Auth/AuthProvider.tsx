import { useEffect, useState } from "react"
import { useApi } from "../../Hooks/useApi"
import { User } from "../../Types/User"
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}: {children: JSX.Element}) =>{
   const [user,setUser] = useState<User | null>(null)
   const api = useApi();

   const validateToken = async () =>{
       const storageData = localStorage.getItem('authToken');
       if(storageData !== 'null'){
           const data = JSON.parse(localStorage.getItem('chave')as string)
               setUser(data);
           }
       }
   useEffect(()=>{validateToken()}
    ,[]);

    const signin = async(email: string, password:string)=>{
        const data = await api.signin(email,password);
        console.log(data)
        if (data.status == 400) return alert ('400 - Alguma credencial esta errada tente novamente')
        if (data.status == 500) return alert ('500 - Erro com o servidor')

        if(data.user && data.token) {
            setUser(data.user);
            localStorage.setItem('chave', JSON.stringify(data.user))
            localStorage.setItem('authToken',data.token );
            alert ('Parabens! Login realizado com sucessor!')
            return true
        }   
        return false;
    }

    const signout =()=>{
        setUser(null);
        localStorage.clear();

    }


    
    return(
        <AuthContext.Provider value={{user,signin,signout}}>
            {children}
        </AuthContext.Provider>
    )
}