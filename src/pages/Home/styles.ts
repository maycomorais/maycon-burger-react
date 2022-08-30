import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #eeeeee;
  color: #970000;
  
  ::-webkit-scrollbar {
    display: none;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: 67vw;
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  color: #970000;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Lobster", cursive;
    font-size: 60px;
    text-transform: capitalize;
    font-weight: 1000;
    color: #970000;
  }
  p {
    font-family: "Bebas Neue", cursive;
    font-size: 12px;
    text-align: end;
    padding-top: 15px;
    margin-bottom: 15px;
    color: #970000;
  }
`;

export const SearchInputContainer = styled.div`
  width: 173px;
  height: 48px;
  display: flex;
  border-radius: 16px;
  background: #eeeeee;
  align-items: center;
  padding: 0 1rem;
  gap: 20px;
  border: 1px solid #333;

  input {
    background: #eeeeee;
    width: 120px;
    height: 38px;
    color: #333;
    font-size: 14px;
    border: none;

    :focus {
      outline: none;
    }
  }
`;

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #970000;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #970000;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: #eeeeee;
  font-family: "Bebas Neue", cursive;
  font-size: 15px;

  :hover {
    color: #f78102;
  }

  ${({ active }) =>
    active &&
    css`
      color: #970000;
      padding-bottom: 5px;
      padding-top: 2px;
      background-color: #f78102;
      border-radius: 5px 5px 0 0;
      border-bottom: 2px solid #f78102;

      :hover {
        color: #970000;
      }
    `}
`;

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;

  h2 {
    font-family: "Bebas Neue", cursive;
    font-size: 30px;
  }
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 48px;
  background-color: #970000;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  padding: 0 1rem;
  box-sizing: border-box;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='red' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  font-family: "Bebas Neue";
  text-align: center;
  font-size: 20px;

  :focus {
    outline: none;
  }

  option {
    :hover {
      background-color: #d2d2d2 !important;
    }
  }
`;
