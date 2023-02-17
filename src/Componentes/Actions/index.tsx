import Buttons from "../Buttons";
import { PosiActions } from "./style";
import { InputSelect, InputText, PosiInputs } from "./style";


const Actions = () =>{
    return(
        <PosiActions>
                <PosiInputs>
                    <InputText type='text' placeholder="Task or issue" />
                    <InputSelect  placeholder="Monday" >
                    <option value='sunday'>Sunday</option> 
                    <option value='sunday'>Monday</option> 
                    <option value='sunday'>Tuesday</option>  
                    <option value='sunday'>Wednesday</option> 
                    <option value='sunday'>Thursday</option> 
                    <option value='sunday'>Friday</option> 
                    <option value='sunday'>Saturday</option> 
                </InputSelect> 
            </PosiInputs>

            <Buttons />
        </PosiActions>
    )
} 
export default Actions;
