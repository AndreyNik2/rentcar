import { styled } from "styled-components";

export const ContainerStyled = styled.div`
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
