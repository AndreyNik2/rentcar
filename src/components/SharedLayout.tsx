import { FC, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import {
  BarContainer,
  Logo,
  MenuBtn,
  NavMenuActive,
  MenuClotheBtn,
  NavMenuClose,
  NavList,
  NavItem,
  NavLink,
  Container
} from "./SharedLayout.styled";

export const SharedLayout: FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header>
        <BarContainer>
          <Container>
            <MenuBtn type="button" onClick={() => showSidebar()}>
              <FaBars color="#ffffff" />
            </MenuBtn>
            <Logo>Rental car</Logo>
          </Container>
        </BarContainer>
        {sidebar && (
          <NavMenuActive>
            <MenuClotheBtn type="button" onClick={() => showSidebar()}>
              <FaRegWindowClose color="#ffffff" />
            </MenuClotheBtn>
            <NavList>
              <NavItem>
                <NavLink to="/" onClick={() => showSidebar()}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/catalog" onClick={() => showSidebar()}>
                  Catalog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/favorites" onClick={() => showSidebar()}>
                  Favorites
                </NavLink>
              </NavItem>
            </NavList>
          </NavMenuActive>
        )}
        {!sidebar && (
          <NavMenuClose>
            <MenuClotheBtn type="button">
              <FaRegWindowClose color="#ffffff" />
            </MenuClotheBtn>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/catalog">Catalog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/favorites">Favorites</NavLink>
              </NavItem>
            </NavList>
          </NavMenuClose>
        )}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
