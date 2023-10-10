import { FC, ReactNode } from "react";
import { ContainerStyled } from "./Container.styled";

type Props = {
  children?: ReactNode;
};


export const Container:FC<Props> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
