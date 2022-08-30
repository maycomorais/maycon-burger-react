import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.terciaryColor};
    padding: 1.5rem;
    width: 22rem;
    height: 13rem;
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
      width: 75%;
      display: flex;
      justify-content: space-between;
    }
  `}
`;
