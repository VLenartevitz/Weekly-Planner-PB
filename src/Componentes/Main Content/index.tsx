import Actions from "../Actions";
import { MainContentStyle } from "./style";
import LogoUol from "../LogoUolGrand";
import Board from "../Board";


const MainContent = () =>{
    return(
        <MainContentStyle>
            <Actions />
            <Board />
                
            
        </MainContentStyle>
    )
}
export default MainContent;
