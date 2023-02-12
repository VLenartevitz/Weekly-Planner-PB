import Actions from "../Componentes/Actions";
import {ContainerDash } from "../Componentes/Container";
import Header from "../Componentes/Header";
import LogoUol from "../Componentes/LogoUolGrand";


const Dashboard = () =>{
    return(
        <ContainerDash>
            <Header />
            <Actions />

            <LogoUol />
        </ContainerDash>
    );
}
export default Dashboard;