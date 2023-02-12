import Buttons from "../Buttons";
import InputsActions from "../InputsActions";
import { PosiActions } from "./style";

const Actions = () =>{
    return(
        <PosiActions>
            {/* arrumar inputs com valores  */}
            <InputsActions />
            <Buttons />
        </PosiActions>
    )
} 
export default Actions;
