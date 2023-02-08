import styled from "styled-components";

export const Welcome = styled.h1`
    color: #e0e0e0;
    margin: 0%;
    font-size: 60px;
    
`

export const Text = styled.p`
    color: #e0e0e0;
    font-size: 16px;
    margin: 0%;

`
export const PositionTitle = styled.div`
    margin-top: ${(props) => props.margintop}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`


export const MarginTitle = styled.div`
    margin-left: ${(props) => props.margintitle ? '-6rem' : '-12rem'} ; 

    
`