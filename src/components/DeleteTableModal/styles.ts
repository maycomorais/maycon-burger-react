import styled, { css } from "styled-components";

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 15vh;
    border-radius: 8px;
    background-color: ${theme.colors.terciaryColor};
    padding: 2rem;
    text-align: center;
    color: ${theme.colors.primaryColor};
    gap: 30px;

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
