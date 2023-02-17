import Actions from "../Actions";
import { MainContentStyle } from "./style";
import Board from "../Board";
import { Days,StyleDays,Lista,ItemList } from "./style";

const daysArray = [
    {day:'  Monday', color:'#FF0024'},
    {day:'  Tuesday', color:'#FF8000'   },
    {day:'  Wednesday', color:'#FFCE00'},
    {day:'  Thursday', color:'#FF0024'},
    {day:'  Friday', color:'#FF8000'},
    {day:'  Saturday', color:'#FFCE00' },
    {day:'  Sunday', color:'#FF0024'}
]


const MainContent = () =>{
    return(
        <MainContentStyle>
            <Actions />
            
            <Days>
                <StyleDays>
                    <Lista> 
                        {daysArray.map((item,) => (
                            <ItemList style={{backgroundColor: item.color}}>
                                {item.day} 
                            </ItemList>

                        ))}
                    </Lista>
                </StyleDays>
            </Days>

            <Board />
                
        </MainContentStyle>
    )
}
export default MainContent;
