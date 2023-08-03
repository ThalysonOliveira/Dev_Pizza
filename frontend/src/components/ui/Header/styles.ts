'use client'

import { styled } from "styled-components"

export const HeaderContainer = styled.header`
    height: 5rem;
`

export const HeaderContent = styled.div`
    max-width: 1120px;
    height:5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        cursor: pointer;
    }
`

export const MenuNav = styled.nav`
    display: flex;
    align-items: center;

    a{
        color: var(--white);
        padding: 0 0.5rem;;
        display: inline-block;
        position: relative;
        transition: color 0.7s;
    }

    &+A{
        margin-left: 2rem;
    }

    &:hover{
        color: var(--red-900);
    }
`

export const IconButton = styled.button`
    margin-left: 2rem;
    background: transparent;
    border: 0;
    transition: transform 0.8s;

    &:hover{
        transform: scale(1.2);
    }
`