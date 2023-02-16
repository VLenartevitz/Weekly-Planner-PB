import React,{useState} from "react"
import { Container } from "../Componentes/Container";
import logoUol from '../imgs/logoUol.svg';
import { ImgUolStyle } from "../Componentes/ImgUol/style";
import { WrapperEs } from "../Componentes/WrapperEs/style";
import { LaptopImg } from "../Componentes/LaptopImg/styles";
import { PositionUol } from "../Componentes/ImgUol/style";
import Title from "../Componentes/Title";
import { LocalInput, PosiForm, PosiInput, StyleInput, StyleInputSenha } from "../Componentes/Input/index";
import Btn from "../Componentes/Btn";
import BtnVoltarCad from "../Componentes/BtnVoltarCad";
import Label from "../Componentes/Label";
import { LocalLabel } from "../Componentes/Label/style";
import {useNavigate} from "react-router-dom";


interface itemLocalStorageType {
    firstName: string;
    lastName: string;
    birthDate: string;
    country: string;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Cadastro = () =>{

    const navigate = useNavigate()

    const [itemLocalStorage,setItemLocalStorage]=useState<itemLocalStorageType>({
        firstName:'',
        lastName:'',
        birthDate:'',
        country:'',
        city:'',
        email:'',
        password:'',
        confirmPassword:'',
    });
    
    const armazenar=(chave:string,valor:string) =>{
        localStorage.setItem('chave',valor) 
        
        
    }
    // revisar
    const validarDados=(e:any)=>{
        e.preventDefault()

        if (itemLocalStorage.firstName == '') return alert('incorrect name')

        if (itemLocalStorage.lastName == '') return alert('incorrect last name')

        if (itemLocalStorage.birthDate == '')return alert('incorrect date of birth')

        if (itemLocalStorage.country == '')return alert('wrong country')

        if (itemLocalStorage.city == '')return alert('incorrect city')

        if (itemLocalStorage.email == '' )return alert('invalid email')

        if (itemLocalStorage.password == '')return alert('password must be more than 8 characters')

        if (itemLocalStorage.confirmPassword !== itemLocalStorage.password)return alert('the passwords are not the same')


        saveUser()

        armazenar('ls_valores',JSON.stringify(itemLocalStorage))
    }

    async function saveUser(){
        try{
            fetch('https://latam-challenge-2.deta.dev/api/v1/users/sign-up',
            {method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }
                ,body:JSON.stringify({
                firstName: itemLocalStorage.firstName,
                lastName: itemLocalStorage.lastName,
                birthDate: itemLocalStorage.birthDate,
                city: itemLocalStorage.city,
                country: itemLocalStorage.country,
                email: itemLocalStorage.email,
                password: itemLocalStorage.password,
                confirmPassword: itemLocalStorage.confirmPassword
            })})
            .then((Response)=>
            {if (Response.status == 400 ) return alert ('400 - Algum input esta invalido')
            if  (Response.status == 500) return alert ('500 - Erro com o servidor')

            Response.json().then((data)=> {
                alert ('Parabens! sua conta foi criada')
                console.log(Response.statusText);
                navigate('/Login')})
            }
            
            );
            }catch(erro:any){console.log(erro.message)};
            
        }

    return (
    <Container>
        <WrapperEs>
            <Title margintop={5} titletext='Please,register to continue' 
            margintitle={true} 
            PositionTitle={0} 
            MarginTitle={true} 
            Title={undefined}/>
                <PosiInput>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='first name'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='text'
                            name='primeiro nome'
                            placeholder='Your first name'
                            value={itemLocalStorage.firstName}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, firstName: e.target.value})}
                            >
                            </StyleInput>
                        </LocalInput>
                    </PosiForm>
                    
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='last name'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='text'
                            name='sobrenome'
                            placeholder='Your last name'
                            value={itemLocalStorage.lastName}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, lastName: e.target.value})}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='birth date'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='text'
                            name='nascimento'
                            placeholder='MM/DD/YYYY'
                            value={itemLocalStorage.birthDate}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, birthDate: e.target.value})}
                            />
                        </LocalInput>
                    </PosiForm>


                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='Country'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='text'
                            name='Country'
                            placeholder='Your Country'
                            value={itemLocalStorage.country}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, country: e.target.value})}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='City'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='text'
                            name='city'
                            placeholder='Your City'
                            value={itemLocalStorage.city}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, city: e.target.value})}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='e-mail'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='email'
                           
                            name='email'
                            placeholder='A valid e-mail here'
                            value={itemLocalStorage.email}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, email: e.target.value})}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='password'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='password'
                            name='senha'
                            placeholder='Your password'
                            value={itemLocalStorage.password}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, password: e.target.value})}
                            />
                        </LocalInput>
                    </PosiForm>
                    <PosiForm>
                        <LocalLabel>
                            <Label labelText='password'></Label>
                        </LocalLabel>
                        <LocalInput>
                            <StyleInput 
                            type='password'
                            name='confirma senha'
                            placeholder='Confirm your password'
                            value={itemLocalStorage.confirmPassword}
                            onChange={(e)=>setItemLocalStorage({...itemLocalStorage, confirmPassword: e.target.value})}
                            />  
                        </LocalInput>
                    </PosiForm>
                    <Btn textButton='Register Now'  onClick={(e:any)=>validarDados(e)} />
                    <BtnVoltarCad path='/Login' textButton='Already have registration? log in'/>
                </PosiInput>
        </WrapperEs>

        <LaptopImg>
            <a href="https://compass.uol/en/home/">
            <PositionUol >
                <ImgUolStyle src={logoUol} />  
            </PositionUol>  
            </a>
        </LaptopImg>
    </Container>
    );
}

export default Cadastro;