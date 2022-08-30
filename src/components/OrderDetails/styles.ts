import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 20vw;
    height: 100vh;
    background-color: ${theme.colors.primaryColor};
    border-radius: 16px 0 0 16px;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.secondaryColor};
    position: fixed;
    right: 0;
  `}
`;

export const OrderDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%
    height: 96px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;

    h2 {
      font-family: ${theme.constants.logoFontFamily};
      font-size: 30px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }
  `}
`;

export const CheckoutDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const CheckoutDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    padding: 0.8rem 0;
    box-sizing: border-box;
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.secondaryColor};

    div {
      display: flex;
      width: 10rem;
      justify-content: space-between;
      padding-right: 10px;
    }
    h3 {
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 14.875rem;
    border-top: 1px solid ${theme.colors.secondaryColor};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    div {
      display: flex;
      justify-content: space-between;
      margin: 0 10px;
      box-sizing: border-box;

      p {
        font-family: ${theme.constants.bodyFontFamily};
      }

      h3 {
        font-family: ${theme.constants.bodyFontFamily};
      }
     
    }
  `}
`;
export const CheckoutCardsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
