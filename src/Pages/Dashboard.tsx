import Actions from "../Componentes/Actions";
import {ContainerDash } from "../Componentes/Container";
import Header from "../Componentes/Header";
import LogoUol from "../Componentes/LogoUolGrand";
import MainContent from "../Componentes/Main Content";


const Dashboard = () =>{
    return(
        <ContainerDash>
            <Header />
            <MainContent />
        </ContainerDash>
    );
}
export default Dashboard;