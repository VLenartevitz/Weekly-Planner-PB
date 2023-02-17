import styled from "styled-components";
import UolGrande from '../../imgs/UolGrande.png'

export const AreaBoard = styled.div`
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    overflow-x: hidden;
    background: rgba(255, 255, 255, 0.95);
`


export const Tasks = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;

`
export const Time = styled.div`
    width: 100vw;
    height: 7.5vh;

    display: flex;
`
export const BoxTime = styled.div`
    height: 75px;
    width: 85px;
    left: 0px;
    top: 0px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffffff ;
`

export const PosiLogo = styled.div`
display: flex;
position: relative;
justify-content: flex-end;


`

export const Logo = styled.div`
width: 700px;
height: 600px;
opacity: 0.5;
background-image: url(${UolGrande});
`