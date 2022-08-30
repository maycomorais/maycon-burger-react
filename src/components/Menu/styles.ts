import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

interface MenuItemButtonProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  min-width: 8vw;
  height: 100vh;
  border-radius: 0 16px 16px 0;
  background-color: #970000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;

  img {
    width: 4rem;
    margin: 1.25rem 0;
  }
  nav {
    width: 100%;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  height: 80px;
  width: calc(100% - 12px);
  margin-left: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45% 0 0 45%;
  color: white;

  ${({ logout }) =>
    logout &&
    css`
      position: absolute;
      bottom: 0;
      width: calc(6.5rem - 12px);
      border-radius: 16px;
    `}

  ${({ active }) =>
    active &&
    css`
      background-color: #eeeeee;
    `}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
   width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-color: #970000;
  color: #f78102;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.1);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: orangered;
      color: #ffffff;
    `}
`;
