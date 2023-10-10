import { styled } from "styled-components";

export const Car = styled.li`
  list-style: none;
`;

export const ImgContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const CarImg = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`;

export const LikeBtn = styled.button`
  padding: 6px;
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const CarTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CarTitle = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #121417;
`;

export const CarModel = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #3470ff;
`;

export const СhContainer = styled.div`
  margin-top: 8px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

export const Characteristics = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
  color: #12141780;
`;

export const ModalBtn = styled.button`
  margin-top: 16px;
  width: 300px;
  height: 44px;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  &:hover,
  &:focus {
    background-color: #4570ff;
  }
`;
