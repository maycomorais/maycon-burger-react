import styled, { css } from "styled-components";

export const CheckoutCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6.625rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.625rem;
  `}
`;

export const CheckoutCardHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;
    margin-bottom: 0.625rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 8px;
      border: 1px solid ${theme.colors.secondaryColor};
      margin-right: 0.625rem;
      object-fit: cover;
    }

    div {
      width: calc(100% - 6.125rem);
      height: 100%;
      line-height: 140%;

      h5 {
        width: 8.75rem;
        height: 1.125rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-family: ${theme.constants.bodyFontFamily};
        font-size: 20px;
      }
    }

    p {
      font-family: ${theme.constants.bodyFontFamily};
    }

    span {
      display: flex;
      align-items: center;
      color: ${theme.colors.terciaryColor};
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const ProductQuantityInput = styled.input`
  ${({ theme }) => css`
    all: unset;
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    color: ${theme.colors.terciaryColor};
    border-radius: 8px;
    text-align: center;
    font-family: ${theme.constants.bodyFontFamily};
  `}
`;

export const CheckoutCardFooter = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
  `}
`;

export const RemoveProductButton = styled.button`
  ${({ theme }) => css`
    all: unset;
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    text-align: center;
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    color: ${theme.colors.secondaryColor};
    cursor: pointer;
  `}
`;
