import { styled } from "styled-components";
import { FaXmark } from "react-icons/fa6";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarCard = styled.div`
  position: relative;
  width: 450px;
  min-height: 650px;
  border-radius: 24px;
  background-color: #ffffff;
  padding: 40px;
`;

export const CloseModalBtn = styled.button`
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover,
  &:focus {
    border: 1px solid #444444;
  }
`;

export const CloseIcon = styled(FaXmark)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ImgContainer = styled.div`
  width: 450px;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 500px;
  object-fit: cover;
`;

export const CarTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CarTitle = styled.h3`
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
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
`;

export const Characteristics = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
  color: #12141780;
`;

export const Des = styled.p`
margin-top: 16px;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`;

export const AccTtl = styled.p`
  margin-top: 8px;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`;

export const AccContainer = styled.div`
  margin-top: 8px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
`;

export const Acc = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
  color: #12141780;
`;

export const PriceContainer = styled.div`
margin-top: 16px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 10px;
  min-width: 40px;
  display: inline-block;
  margin-right:8px;
`;

export const MileageTitle = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 600;
  color: #3470ff;
`;

export const Mileage = styled.span`

  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
  color: #363535;
`;

export const RentalBtn = styled.button`
display: block;
  margin-top: 8px;
  width: 138px;
  height: 32px;
  outline: none;
  border-radius: 8px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 600;
  &:hover,
  &:focus {
    background-color: #4570ff;
  }
`;
