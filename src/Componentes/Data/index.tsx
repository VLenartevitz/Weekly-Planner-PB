import { useEffect, useState } from "react";
import { DataPosi, StyleDataAtual, StyleHora } from "./style";

const Data = () =>{

    var meses = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Ovember",
        "December"
      ];
      const [horas, setHoras]=useState<string>()

    useEffect(()=>{
        setInterval(()=>{

            const data = new Date()
            const hora = data.getHours()
            const minutos = data.getMinutes()

            setHoras(`${hora}:${minutos}`)
            
        },1000)
    },[])
    const data = new Date()
    const dia = data.getDate() + 'th'
    const mes = meses[data.getMonth() + 1];
    const ano = data.getFullYear()
    const dataAtual = `${mes} ${dia},${ano}`

    return (
        <DataPosi>
            <StyleHora>{horas}</StyleHora>
            <StyleDataAtual>{dataAtual}</StyleDataAtual>
        </DataPosi>    
    )
} 
export default Data;
