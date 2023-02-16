import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/ImgUol/style";
import { ImgUolStyle } from "../Componentes/ImgUol/style";
import { WrapperEs } from "../Componentes/WrapperEs/style";
import Title from "../Componentes/Title";
import {MarginTitle} from "../Componentes/Title/style";
import BtnLogin from '../Componentes/BtnLogin/index'
import TextLogin from "../Componentes/TextLogin";
import BtnVoltarCad from "../Componentes/BtnVoltarCad";
import IconeUser from "../Componentes/IconeUser";
import { LocalInput, PosiFormLogin, PosiInput, StyleInput, StyleInputSenha } from "../Componentes/Input";
import { useState } from "react";
import IconeSenha from "../Componentes/IconeSenha";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()

    const [itemLocalStorage,setItemLocalStorage]=useState({
        firstName:'',
        password:'',
        
    });

// sistema de erro amarelo faltando
    const validarDadosLogin =(e:any) =>{
        e.preventDefault()
        const dados = JSON.parse(localStorage.getItem('chave') || "")
        let fullName = dados.firstName + " " + dados.lastName 
        if ((itemLocalStorage.firstName === fullName || itemLocalStorage.firstName === dados.email) && (itemLocalStorage.password === dados.password))
        {}else{alert('erro')} getUser()}
                  
 
    const [movimentouser,setMovimentouser]=useState(false)          
    const [movimentosenha,setMovimentosenha]=useState(false)

    async function getUser(){


        try{
            fetch('https://latam-challenge-2.deta.dev/api/v1/users/sign-in',
            {method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                email: itemLocalStorage.firstName,
                password: itemLocalStorage.password
            })})
            .then((Response)=>
            {
                if (Response.status == 400) return alert ('400 - Alguma credencial esta errada tente novamente')
                if (Response.status == 500) return alert ('500 - Erro com o servidor')

                Response.json().then((data)=> {
                alert ('Parabens! Login realizado com sucessor!')
                console.log(Response.statusText);
                navigate('/Dashboard')})


            }
            )
        }catch(erro:any){console.log(erro)};
    };

    return(
        <Container>
            <WrapperEs> 
            <Title
                    margintop={12.313}
                    titletext='To continue browsing safely, log in to the network.' 
                    margintitle={true}
                    PositionTitle={0}
                    MarginTitle={true} 
                    Title={undefined} />
                <PosiInput>
                <TextLogin />
                    <PosiFormLogin>
                        <IconeUser movimentoxuser={movimentouser} />
                        <LocalInput>
                            <StyleInput
                            type='text'
                            name='user'
                            placeholder='user name'
                            value={itemLocalStorage.firstName}
                            onChange={(e)=>{setItemLocalStorage({...itemLocalStorage, firstName: e.target.value});setMovimentouser(true)}}
                            onFocus={()=>setMovimentouser(true)}
                            onBlur={()=> {if (itemLocalStorage.firstName.length === 0) {setMovimentouser(false)}}}
                            
                            />  
                        </LocalInput>
                    </PosiFormLogin>
                     <PosiFormLogin>
                     <IconeSenha movimentoxsenha={movimentosenha} />
                        <LocalInput >
                            <StyleInputSenha
                            type='password'
                            name='password'
                            placeholder='password'
                            value={itemLocalStorage.password}
                            onChange={(e)=>{setItemLocalStorage({...itemLocalStorage, password: e.target.value});setMovimentosenha(true)}}
                            onFocus={()=>setMovimentosenha(true)}
                            onBlur={()=> {if (itemLocalStorage.password.length === 0) {setMovimentosenha(false)}}}
                            />  
                        </LocalInput>
                    </PosiFormLogin> 
                    <BtnLogin textButton='Log in' onClick={(e:any)=>validarDadosLogin(e)}/>
                    <BtnVoltarCad path='/' textButton='Back to registration screen'/>
                    
                </PosiInput>
            </WrapperEs>

            <LaptopImg>
                <PositionUol>
                    <ImgUolStyle src={logoUol}/>  
                </PositionUol>  
            </LaptopImg>
        </Container>
    );
}
export default Login;
