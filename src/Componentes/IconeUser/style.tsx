import styled from "styled-components";

export const TamIcone = styled.img<{movimentouser:boolean}>`
    width: 3rem;
    margin-top: 1rem;
    transform:${({movimentouser}) => movimentouser ? 'translateX(-100px)' : 'translateX(0px)'};
    display: flex;
    margin-top: 1rem;
    width: 40px;
    height: 40px;
    transition: 1s;
    
`