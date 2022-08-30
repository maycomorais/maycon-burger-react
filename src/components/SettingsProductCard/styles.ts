import styled, { css } from "styled-components";

export const SettingsProductCardContainer = styled.div`
  ${({ theme }) => css`
    width: 220px;
    height: 263px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.secondaryColor};
    font-family: ${theme.constants.bodyFontFamily};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.terciaryColor};
    text-align: center;

    div {
      display: flex;
      width: 100%;
      height: 60%;
    }

    img {
      width: 100%;
      border-radius: 6px 6px 0 0;
      object-fit: cover;
    }

    h3 {
      color: ${theme.colors.terciaryColor};
      font-weight: 400;
      font-family: ${theme.constants.bodyFontFamily};
    }

    p {
      color: ${theme.colors.terciaryColor};
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const SettingsProductEditButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0px 0px 8px 0px;
    font-family: ${theme.constants.bodyFontFamily};
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;

export const SettingsProductDeleteButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0px 0px 0px 8px;
    font-family: ${theme.constants.bodyFontFamily};
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;
