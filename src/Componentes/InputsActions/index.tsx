import { InputHours, InputSelect, InputText, PosiInputs } from "./style";

const InputsActions = () =>{
    return(
        <PosiInputs>
            <InputText type='text' placeholder="Task or issue" />
            <InputSelect  type='text' placeholder="Monday" /> 
            <InputHours type='text' placeholder="data"/>
        </PosiInputs>
    )
} 
export default InputsActions;
