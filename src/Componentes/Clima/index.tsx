import { Response } from "node-fetch";
import { useEffect, useState } from "react";
import { ClimaPosi, PosiNuvemTemp, StyleName, StyleNuvem, StyleTemp } from "./style";
import nuvem from '../../imgs/nuvem.png'

const Clima = () => {

    const [weather, setWeather] = useState<any>();

    useEffect(()=>{
        const cidade = JSON.parse(localStorage.getItem('chave') || "")
        const WheaterApi = {
            city: cidade.city,
            key:"6acd5cd4f69292a07b3184c643234ee5"
        };
        function getWheater(){
            try{
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${WheaterApi.city}&appid=${WheaterApi.key}&units=metric`
                ).then((Response)=>
                Response.json().then((data)=> setWeather(data))
                );
            }catch(erro){console.log(erro)};
            
        }
        getWheater()
        
    }, []);

    useEffect(()=>{
        console.log(weather)
    })
  
    return (
        
        <ClimaPosi >
            <StyleName>
                {weather?.name}
                {/* {weather?.country} */}
            </StyleName>
            <PosiNuvemTemp>
                <StyleNuvem>
                    <img src={nuvem}></img>
                </StyleNuvem>
                <StyleTemp>
                    {Number(weather?.main?.temp).toFixed(0)}°
                </StyleTemp>
            </PosiNuvemTemp>
        </ClimaPosi>
        
    )
}

export default Clima;

   