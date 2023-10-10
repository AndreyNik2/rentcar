import { FC, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { ICar } from "../models/ICar";
import {
  Acc,
  AccContainer,
  AccTtl,
  Backdrop,
  CarCard,
  CarModel,
  CarTitle,
  CarTitleContainer,
  CardImg,
  Characteristics,
  CloseModalBtn,
  Des,
  ImgContainer,
  Mileage,
  MileageTitle,
  PriceContainer,
  RentalBtn,
  СhContainer,
} from "./CarModal.styled";
import { FaXmark } from "react-icons/fa6";

type Prop = {
  car: ICar;
  isOpenModal: boolean;
  setIsOpenModal: (bool: boolean) => void;
};

export const CarModal: FC<Prop> = ({ car, isOpenModal, setIsOpenModal }) => {
  const adress = car.address.split(", ");
  const modalRef = useRef<HTMLDivElement>(null);
  const modalClose = () => {
    setIsOpenModal(false);
  };

  
  const mileage = (car: ICar) => {
    if (car.mileage.toString().length <= 3) {
      return car.mileage;
    }
    if (car.mileage.toString().length > 3) {
      const length = car.mileage.toString().length;
      return `${car.mileage.toString().slice(0, length - 3)},${car.mileage
        .toString()
        .slice(-3)}`;
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpenModal(false);
      }
    };
    const handleclick = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("mousedown", handleclick);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("mousedown", handleclick);
    };
  }, [setIsOpenModal]);

  return (
    <Backdrop>
      <CarCard ref={modalRef}>
        <CloseModalBtn onClick={() => setIsOpenModal(!isOpenModal)}>
          <FaXmark color="#121212" />
        </CloseModalBtn>
        {/* <CloseIcon /> */}
        <ImgContainer>
          <CardImg src={car.img} alt={car.make} />
        </ImgContainer>
        <CarTitleContainer>
          <CarTitle>
            {car.make} <CarModel>{car.model}</CarModel>, {car.year}
          </CarTitle>
        </CarTitleContainer>
        <СhContainer>
          <Characteristics>{adress[2]}</Characteristics>
          <Characteristics>|</Characteristics>
          <Characteristics>{adress[1]}</Characteristics>
          <Characteristics>|</Characteristics>
          <Characteristics>{car.rentalCompany}</Characteristics>
          <Characteristics>{car.type}</Characteristics>
          <Characteristics>|</Characteristics>
          <Characteristics>{car.engineSize}</Characteristics>
          <Characteristics>|</Characteristics>
          <Characteristics>{car.fuelConsumption}l/100km</Characteristics>
          <Characteristics>|</Characteristics>
          <Characteristics>{mileage(car)}</Characteristics>
        </СhContainer>
        <Des>{car.description}</Des>
        <AccTtl>Accessories and functionalities:</AccTtl>
        <AccContainer>
          {car.accessories.map((acc) => (
            <div key={nanoid()}>
              <Acc>{acc}</Acc>
            </div>
          ))}
        </AccContainer>
        <AccTtl>Rental conditions:</AccTtl>
        <AccContainer>
          <Acc>{car.rentalConditions}</Acc>
        </AccContainer>
        <PriceContainer>
          <MileageTitle>
            Mileage: <Mileage>{mileage(car)}</Mileage>
          </MileageTitle>
        </PriceContainer>
        <PriceContainer>
          <MileageTitle>
            Price: <Mileage>{car.rentalPrice}</Mileage>
          </MileageTitle>
        </PriceContainer>
        <RentalBtn>Rental car</RentalBtn>
      </CarCard>
    </Backdrop>
  );
};
