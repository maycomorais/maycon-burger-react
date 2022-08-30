import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disabled" | "cancel";
  size?: "small" | "large" | "x-large" | "ball";
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
  width: 175px;
    height: 48px;
    border-radius: 8px;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
    border: none;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 15px;
    line-height: 15px;
    align-items: center;
    cursor: pointer;

    ${variant === "disabled" &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.secondaryColor};
      box-shadow: none;
    `}

    ${variant === "cancel" &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.secondaryColor};
      border: 1px solid ${theme.colors.secondaryColor};
      box-shadow: none;
    `}

    ${size === "small" &&
    css`
      height: 2.125rem;
      width: 5rem;
    `}

    ${size === "large" &&
    css`
      width: 12.5rem;
    `}

    ${size === "x-large" &&
    css`
      width: 15.65rem;
    `}

    ${size === "ball" &&
    css`
      width: 50px;
      border-radius: 50%;
      box-shadow: 1px 2px 2px rgba(10, 4, 3, 0.8);
      font-size: 20px;
    `}
  `}
`;
