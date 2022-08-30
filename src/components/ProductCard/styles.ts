import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
  active?: boolean;
}

interface ButtonFavProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "disabled" | "cancel";
  size?: "small" | "large" | "x-large";
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 350px;
    margin: 0 15px;
    transition: all 0.3s ease;

    :hover {
      transform: scale(1.05);
    }

    img {
      height: 80%;
      width: 100%;
      object-fit: cover;
      opacity: 0.9;
      border-radius: 10px;
    }

    :hover img {
      opacity: 1;
    }

    .nome {
      font-family: sans-serif;
      font-size: 40px;
      text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.9);
      position: absolute;
      transition: all 0.3s ease;
      max-width: 300px;
      text-align: center;
      text-transform: capitalize;
      font-weight: 200;
      color: wheat;
      font-family: "lobster", cursive;
    }

    :hover .nome {
      opacity: 0;
    }

    .descricao {
      display: flex;
      margin-top: 150px;
      margin-bottom: 35px;
      flex-direction: row;
      font-size: 20px;
      position: absolute;
      font-family: sans-serif;
      font-weight: lighter;
      max-width: 300px;
      text-align: center;
      text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.9);
      transition: all 0.3s ease;
      color: wheat;
      font-family: "Bebas Neue", cursive;
    }

    :hover .descricao {
      opacity: 0;
    }

    .preco {
      position: fixed;
      opacity: 0;
      transition: all 0.8s ease;
      font-family: "Lobster", cursive;
      color: wheat;
    }

    :hover .preco {
      opacity: 1;
      text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.94);
      font-size: 70px;
    }

    .preco span {
      font-family: "Lobster", cursive;
      color: #970000;
    }

    :hover .preco span {
      opacity: 1;
      font-size: 70px;
    }

    .button {
      display: flex;
      align-self: flex-start;
      margin-top: 30px;
      justify-content: flex-end;
      padding-right: 10px;
      position: absolute;
      height: 50px;
      width: 350px;
    }
  `}
`;

export const FavContainer = styled.button<ButtonFavProps>`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 10px;
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.secondaryColor};
    box-shadow: 1px 2px 2px rgba(10, 4, 3, 0.50);;
    transition: all 0.3s ease;
    cursor: pointer;
    /* position: fixed; */
  `}
`;
