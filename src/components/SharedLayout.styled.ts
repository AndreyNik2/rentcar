import { Link } from "react-router-dom";
import styled from "styled-components";
import headerImg from '../assets/images/menu-bg.jpg'

export const BarContainer = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: url(${headerImg});
  background-position: bottom;
  background-size: cover;
  @media (min-width: 1440px) {
    height: 150px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 10px;
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 720px;
    padding: 0 24px;
  }
  @media (min-width: 1440px) {
    width: 1280px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const MenuBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover, &:focus {
    border: 1px solid #aaaaaa;
  }
`;

export const Logo = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
  margin-left: 40px;
`;

export const NavMenuActive = styled.nav`
  background-color: #060b26;
  width: 250px;
  min-height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  transition: 850px;
  padding: 20px 0px 0px 40px;

  @media (min-width: 1440px) {
    padding: 40px 0px 0px 40px;
  }
`;

export const NavMenuClose = styled.nav`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const MenuClotheBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    border: 1px solid #aaaaaa;
  }
`;

export const NavList = styled.ul`
list-style: none;
padding: 0;
margin-top: 20px;
`;

export const NavItem = styled.li`
  padding: 8px 0px;
  &:hover {
    background-color: #3b68fe;
  }
`;



export const NavLink = styled(Link)`
text-decoration: none;
color: #f5f5f5;
`
