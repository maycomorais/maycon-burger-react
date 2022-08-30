import styled, { css } from "styled-components";

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.terciaryColor};
  `}
`;

export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 6.25rem);
    margin-top: 4.75rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    box-sizing: border-box;
    background-color: ${theme.colors.primaryColor};
    border-radius: 8px;
    color: ${theme.colors.secondaryColor};

    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      margin: 2.125rem 0;
      margin-left: 1.5rem;
    }
  `}
`;

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 16.25rem);
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 1.5rem;
    overflow-y: scroll;
    
  `}
`;

export const AddEntityCard = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 8rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondaryColor};
    cursor: pointer;

    p {
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const EntityCard = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 8rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.terciaryColor};
    cursor: pointer;

    div {
      display: flex;
      width: 100%;
    }

    p {
      margin-top: 2rem;
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const SettingsCategoryEditButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0px 0px 8px 0px;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    font-family: ${theme.constants.bodyFontFamily};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;

export const SettingsCategoryDeleteButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0px 0px 0px 8px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
    font-family: ${theme.constants.bodyFontFamily};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;
