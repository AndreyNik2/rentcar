import { FC, useState } from "react";
import { ICar } from "../models/ICar";
import {
  CarImg,
  ImgContainer,
  Car,
  CarTitleContainer,
  CarTitle,
  CarModel,
  СhContainer,
  Characteristics,
  LikeBtn,
  ModalBtn,
} from "./CarItem.styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { toggleFavorites } from "../redux/favoritesSlice";
import { CarModal } from "./CarModal";

type Prop = {
  car: ICar;
};

export const CarItem: FC<Prop> = ({ car }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favoriteReducer.list);

  const toggleFav = (car: ICar) => {
    dispatch(toggleFavorites(car.id));
  };

  const adress = car.address.split(", ");

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

  return (
    <Car>
      <ImgContainer>
        <CarImg src={car.img} alt={car.make} />
        {favorites.includes(car.id) && (
          <LikeBtn onClick={() => toggleFav(car)}>
            <AiFillHeart color="#3470FF" size="20px" />
          </LikeBtn>
        )}
        {!favorites.includes(car.id) && (
          <LikeBtn onClick={() => toggleFav(car)}>
            <AiOutlineHeart color="#FFFFFFCC" size="20px" />
          </LikeBtn>
        )}
      </ImgContainer>
      <CarTitleContainer>
        <CarTitle>
          {car.make} <CarModel>{car.model}</CarModel>, {car.year}
        </CarTitle>
        <CarTitle>{car.rentalPrice}</CarTitle>
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
      <ModalBtn onClick={() => setIsOpenModal(!isOpenModal)}>
        Learn More
      </ModalBtn>
      {isOpenModal && <CarModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}
        car={car} 
      />}
    </Car>
  );
};
