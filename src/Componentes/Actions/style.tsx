import styled from "styled-components";

export const PosiActions = styled.div`
    display: flex;
    margin-top: 10rem;
    align-items: center;
    
    justify-content: space-between;
    width: 100vw;
    height: 5rem;
`
export const PosiInputs = styled.div`
    display: flex;
    margin-left: 20px;
`
export const InputText = styled.input`
   
    position: relative;
    width: 391px;
    height: 45px;
    margin-right: 3px;

    border: 1px solid #FECE00;
    border-radius: 10px;
    &::placeholder{
    position: relative;
    padding-left: 12px;
    font-size: 14px;

    display: flex;
    align-items: center;

    color: rgba(0, 0, 0, 0.7);
    }
`
export const InputSelect = styled.select`
    box-sizing: border-box;

    position: relative;
    width: 240px;
    height: 50px;
    margin-right: 3px;

    

    background: #FFFFFF;
    border: 1px solid #FECE00;
    border-radius: 10px;
    &::placeholder{
    position: relative;
    padding-left: 12px;
    font-size: 14px;

    display: flex;
    align-items: center;

    color: rgba(0, 0, 0, 0.7);
    }
`

