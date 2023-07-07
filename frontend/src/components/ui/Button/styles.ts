"use client"
import { keyframes, styled } from "styled-components"

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`

export const Btn = styled.button`
    max-width: 600px;
    background-color: var(--red-900);
    border: 0;
    padding: 0.4rem;
    color: var(--white);
    border-radius: 0.5rem;
    transition: filter 0.2s;
    
    &[disabled]{
        cursor: not-allowed;
        svg{
            animation: ${rotate} 2s infinite;
        }
    }

    &:hover {
        filter: brightness(1.08);
    }
`

export const BtnText = styled.a`
    color: var(--white);
`
