import { Response } from "node-fetch";
import { useEffect, useState } from "react";
import { ClimaPosi } from "./style";


const Clima = () => {
    function WheaterApi(){
        const cidade = JSON.parse(localStorage.getItem('chave') || "")
        const wheaterApi = {
            url:"https://api.openweathermap.org/data/2.5",
            city:localStorage,
            key:"6acd5cd4f69292a07b3184c643234ee5"
        };
        const [weather, setWeather] = useState("");

        useEffect(()=>{
            const interval = setInterval(()=>{
            fetch(
                `weather?lat={lat}&lon={lon}&appid=${cidade}&units=metric&appid=${wheaterApi.key}`
            ).then((Response)=>
            Response.json().then((data)=> setWeather(data.main.temp.toFixed(0)))
            );
        }, 1000);

        return() =>clearInterval(interval);
    },[]);

    return (<>
        <ClimaPosi>adwasdawda</ClimaPosi>
        </>
    )
}}

export default Clima;

   