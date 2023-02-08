import { StyleLabel } from "./style.js";

interface Props {
    labelText: String;
}

const Label = (props: Props) =>{
    return(
        <>
        <StyleLabel>{props.labelText}</StyleLabel>
        </>
    );
};
export default Label;