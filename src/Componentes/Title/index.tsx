import React from "react";
import { PositionTitle, MarginTitle, Welcome } from "./style";
import { Text } from "./style";

interface Props{
    margintop: number;
    margintitle: boolean ;
    titletext: string;
    PositionTitle: number;
    MarginTitle: boolean;
    Title:any ;
}

const Title = ( props: Props ) => {
    return (
        <PositionTitle margintop={props.margintop}>
            <MarginTitle margintitle={props.margintitle}>
            <Welcome>Welcome,</Welcome>
            <Text>{props.titletext}</Text>
            </MarginTitle>
        </PositionTitle>
    );
};
export default Title;