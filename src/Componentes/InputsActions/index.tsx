import { InputHours, InputSelect, InputText, PosiInputs } from "./style";

const InputsActions = () =>{
    return(
        <PosiInputs>
            <InputText type='text' placeholder="Task or issue" />
            <InputSelect  placeholder="Monday" >
            <option>adwads</option>    
            </InputSelect> 

            <InputHours type='time' placeholder="data"/>
        </PosiInputs>
    )
} 
export default InputsActions;
