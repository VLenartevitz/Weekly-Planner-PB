import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/ImgUol/style";
import { ImgUolStyle } from "../Componentes/ImgUol/style";
import { WrapperEs } from "../Componentes/WrapperEs/style";
import Title from "../Componentes/Title/index.js";
import {MarginTitle} from "../Componentes/Title/style";
import BtnLogin from '../Componentes/BtnLogin/index.js'
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

    
    const validarDadosLogin =() =>{
        const dados = JSON.parse(localStorage.getItem('chave') || "")
        let fullName = dados.firstName + " " + dados.lastName
        if ((itemLocalStorage.firstName === fullName || itemLocalStorage.firstName === dados.email) && (itemLocalStorage.password === dados.password))
        {navigate('/Dashboard')}else{alert('erro')}}
        

    const [movimentouser,setMovimentouser]=useState(false)
    const [movimentosenha,setMovimentosenha]=useState(false)

    return(
        <Container>
            <WrapperEs> 
            <Title margintop={12.313} titletext='To continue browsing safely, log in to the network.' margintitle={true}/>
                <PosiInput>
                <TextLogin />
                    <PosiFormLogin>
                        <IconeUser movimentoxuser={movimentouser}/>
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
                     <IconeSenha movimentoxsenha={movimentosenha}/>
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
                    <BtnLogin textButton='Log in' onClick={validarDadosLogin}/>
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
