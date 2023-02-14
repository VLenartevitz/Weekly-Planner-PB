import { InputHours, InputSelect, InputText, PosiInputs } from "./style";

const InputsActions = () =>{
    return(
        <PosiInputs>
            <InputText type='text' placeholder="Task or issue" />
            <InputSelect  placeholder="Monday" >
            <option>Sunday</option> 
            <option>Monday</option> 
            <option>Tuesday</option>  
            <option>Wednesday</option> 
            <option>Thursday</option> 
            <option>Friday</option> 
            <option>Saturday</option> 
            </InputSelect> 

            <InputHours type='time' placeholder="data"/>
        </PosiInputs>
    )
} 
export default InputsActions;
