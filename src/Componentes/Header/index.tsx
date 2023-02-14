import Clima from "../Clima/index";
import Data from "../Data";
import ImgUolDashboard from "../ImgUolDashboard";
import Logout from "../Logout";
import { Background, DivWeekly, SpaceDataClima, SubTitle, TitleWeekly } from "./style";

const Header = () =>{
    return(
        <Background>
            <DivWeekly>
                <TitleWeekly>Weekly Planner</TitleWeekly>
                <SubTitle>Use this planner to organize your daily issues.</SubTitle>
            </DivWeekly>
            
            <SpaceDataClima>
                <Data />
                <Clima />
            </SpaceDataClima>

            <Logout />
            
        </Background>
        
    )
}

export default Header;