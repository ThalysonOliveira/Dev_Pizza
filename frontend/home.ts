"use client"
import { styled } from "styled-components";

export const ContainerCenter = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--gray-900);
`

export const Login = styled.div`
    margin-top: 2rem;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 1.5rem;

    @media (max-width: 620px) {
        width: 90%;
    }
`

export const Text = styled.a`
    margin-top: 1rem;
    color: var(--white);
    cursor: pointer;
`

export const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;

    button {
        height: 40px;
        font-size: 1.2rem;
    }
`
