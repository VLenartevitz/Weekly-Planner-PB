import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    position: fixed;
    background-color:  #FFFFFF;
    width: 100%;
    height: 8.125rem;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`

export const DivWeekly = styled.div`
    position: relative;
    width: 36rem;
    height: 64px;
    left: 0px;
    top: 2em;
    background: #000000;
    border-radius: 0px 14px 15px 0px;
`

export const TitleWeekly = styled.text`
    width: 18.438rem;
    height: 2.75rem;
    margin-left: 1.5rem;

    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: #FFFFFF;

    flex: none;
    order: 2;
    flex-grow: 0;
`
export const SubTitle = styled.text`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    margin-left: 1.5rem;
    align-items: center;
`

export const SpaceDataClima =styled.div`
display: flex;
width: 900px;
justify-content: space-around;
`