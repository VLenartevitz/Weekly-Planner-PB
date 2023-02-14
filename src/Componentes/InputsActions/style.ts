import styled from "styled-components";

export const PosiInputs = styled.div`
    display: flex;
    margin-left: 20px;
`
export const InputText = styled.input`
   
    position: relative;
    width: 391px;
    height: 45px;

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
    height: 45px;
    

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
export const InputHours = styled.input`
    box-sizing: border-box;

    position: relative;
    
    height: 45px;


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