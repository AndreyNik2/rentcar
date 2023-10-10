import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 2;
  border-bottom: 1px solid #000000;
`;

export const CarList = styled.ul`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 50px auto;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #3470ff;
  &:focus {
    background-color: #4570ff;

  }
`;
