import { StyleBtn } from "./style";
import { Link } from "react-router-dom";

interface Props{
    onClick: Object;
    textButton: String;
}

const Btn = ( props:Props ) =>{
    return (
        <StyleBtn onClick={props.onClick}>{props.textButton}</StyleBtn>
    );
};
export default Btn;