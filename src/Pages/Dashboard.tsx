import Actions from "../Componentes/Actions";
import {ContainerDash } from "../Componentes/Container";
import Header from "../Componentes/Header";


const Dashboard = () =>{
    return(
        <ContainerDash>
            <Header />
            <Actions />
            
        </ContainerDash>
    );
}
export default Dashboard;