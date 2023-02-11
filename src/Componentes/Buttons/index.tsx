import { AddStyle, DeleteStyle, PosiBtn, TextAdd, TextDelete } from "./styte";

const Buttons = () =>{
    return(
        <PosiBtn>
            <AddStyle><TextAdd>+  Add to Calendar</TextAdd></AddStyle>
            <DeleteStyle><TextDelete>Delete All</TextDelete></DeleteStyle>
        </PosiBtn>
    )
} 
export default Buttons;
