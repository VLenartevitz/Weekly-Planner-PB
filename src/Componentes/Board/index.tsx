import { AreaBoard, BoxTime, Tasks, Time } from "./style";
import { Logo, PosiLogo } from "./style";




const Board = () =>{
    return (
        <AreaBoard>
            <Tasks> 
                <Time><BoxTime>Time</BoxTime></Time>
            </Tasks>
            
            <PosiLogo>
                <Logo></Logo>
            </PosiLogo>
        </AreaBoard>
    )
} 
export default Board;