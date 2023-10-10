import { FC, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  CarList,
  DropdownsContainer,
  H1,
  LoadMoreBtn,
} from "./CatalogPage.styled";
import { Container } from "../components/Container";
import { getRentalCars } from "../services/api/apiRentalCar";
import { ICar } from "../models/ICar";
import { errorCatch } from "../services/api/error.api";
import { CarItem } from "../components/CarItem";
import { Dropdown } from "../components/Dropdown";

export const CatalogPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [carList, setCarList] = useState<ICar[]>([]);

  const incrementPage = () => {
    if (carList.length / 8 > page) {
      setPage((prevState) => prevState + 1);
    }
  };

  const filterCarList = (
    carList: ICar[],
    selectedMake: string,
    selectedPrice: string
  ) => {
    if (selectedMake.length === 0 && selectedPrice.length === 0) {
      return carList;
    }
    if (selectedMake.length > 0 && selectedPrice.length > 0) {
      const filterMake = carList.filter((item) => item.make === selectedMake);
      return filterMake.filter((item) => item.rentalPrice === selectedPrice);
    }
    if (selectedMake.length > 0 && selectedPrice.length === 0) {
      return carList.filter((item) => item.make === selectedMake);
    }
    if (selectedMake.length === 0 && selectedPrice.length > 0) {
      return carList.filter((item) => item.rentalPrice === selectedPrice);
    }
  };

  const filteredCarList = filterCarList(carList, selectedMake, selectedPrice);

  const dropdownList = (carList: ICar[], type: "make" | "rentalPrice") => {
    const makeList = carList.map((item) => item[type]);
    const filterList = makeList.filter((item, index) => index === makeList.indexOf(item));
    return filterList.sort((a, b) => a.localeCompare(b));
  };

  useEffect(() => {
    async function fetchData(page: number) {
      try {
        const data = await getRentalCars();
        if (data) {
          setCarList(data);
        }
        setIsLoading(false);
      } catch (error) {
        errorCatch(error);
        toast.error("Something went wrong :( Try reloading the page.");
      }
    }
    fetchData(page);
  }, [page]);

  return (
    <>
      <main>
        <Toaster position="top-right" />
        <Container>
          <H1>Catalog Page</H1>
          <DropdownsContainer>
            {carList && carList.length > 0 && (
              <Dropdown
                title="Brand name"
                list={dropdownList(carList, "make")}
                set={setSelectedMake}
                selected={selectedMake}
              />
            )}
            {carList && carList.length > 0 && (
              <Dropdown
                title="Price / 1 hour"
                list={dropdownList(carList, "rentalPrice")}
                set={setSelectedPrice}
                selected={selectedPrice}
              />
            )}
          </DropdownsContainer>
          <CarList>
            {filteredCarList &&
              filteredCarList.length > 0 &&
              filteredCarList
                .slice(0, page * 8)
                .map((car) => <CarItem key={car.id} car={car} />)}
          </CarList>
          {filteredCarList && filteredCarList.length / 8 > page && (
            <LoadMoreBtn onClick={() => incrementPage()}>Load more</LoadMoreBtn>
          )}
        </Container>
      </main>
      <Toaster position="top-right" />
    </>
  );
};
