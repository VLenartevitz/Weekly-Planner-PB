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

    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const dia = data.getDate() + 'th'
    const mes = meses[data.getMonth() + 1];
    const ano = data.getFullYear()
    const horaMinutos = `${hora}:${minutos}`
    const dataAtual = `${mes} ${dia},${ano}`

    return (
        <DataPosi>
            <StyleHora>{horaMinutos}</StyleHora>
            <StyleDataAtual>{dataAtual}</StyleDataAtual>
        </DataPosi>    
    )
} 
export default Data;
