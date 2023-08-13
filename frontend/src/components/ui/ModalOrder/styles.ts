import { styled } from "styled-components";

export const Container = styled.div`
    width: 620px;
    background-color: var(--dark-700);
    color: var(--white);

    h2 {
        margin: 1rem 0;
    }

    @media screen and (max-width: 800px) {
      width: 430px;
    }

    @media screen and (max-width: 550px) {
      width: 330px;
    }
`

export const ContainerItem = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    strong{
        color: var(--green-900);
    }
`

export const ItemDescription = styled.span`
    margin-top: 0.5rem;
    word-break: break-all;
`

export const OrderButton = styled.button`
    margin-top: 1.5rem;
    background-color: rgba(0,0,0, 40%);
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    color: var(--red-900);
`

export const Table = styled.span`
    font-size: 1.4rem;
    color: var(--green-900);
`

