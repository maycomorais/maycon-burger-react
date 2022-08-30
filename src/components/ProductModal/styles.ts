import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.terciaryColor};
    font-family: ${theme.constants.bodyFontFamily};
    padding: 1.5rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.primaryColor};
    border-radius: 8px;
    h2 {
      font-family: ${theme.constants.logoFontFamily};
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    all: unset;
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    border-radius: 8px;
    text-align: center;
    color: ${theme.colors.textColor};
  `}
`;
