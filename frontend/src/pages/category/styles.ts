import { styled } from "styled-components";

export const Container = styled.main`
    max-width: 720px;
    margin: 4rem auto;
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h1{
        color: #FFF;
    }

`

export const FormCategory = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`

export const InputCategory = styled.input`
    background-color: var(--dark-900);
    border: 0;
    padding: 1rem;
    height: 40px;
    border-radius: 0.3rem;
    color: var(--white);
    border: 1px solid var(--gray-100);
    margin-bottom: 1rem;
`

export const ButtonAdd = styled.button`
    height: 40px;
    border: 0;
    background-color: var(--green-900);
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    color: var(--dark-700);
`