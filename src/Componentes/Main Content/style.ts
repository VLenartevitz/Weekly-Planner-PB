import styled from "styled-components";

export const MainContentStyle = styled.div`
    display: flex;
    width: 100vw;
    height: 80vh;
    flex-wrap: wrap;
    
    background: rgba(255, 255, 255, 0.95);

`
export const Days = styled.div`
    width: 100vw;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
   
    list-style-type:none;

`
export const StyleDays = styled.div`
    display: flex;
    list-style-type:none;
`
export const Lista = styled.ul`
    display: flex;
    list-style-type:none;
    overflow: hidden;
    
`
export const ItemList = styled.button`
    display: flex;
    align-items: center;
    list-style-type:none;

    margin-left: 4px;
    width: 240px;
    height: 33px;
 
    border: none;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 9px 9px 0px 0px;
    
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.9);
    `