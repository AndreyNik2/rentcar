import { FC, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CarList, H1, LoadMoreBtn } from "./CatalogPage.styled";
import { Container } from "../components/Container";
import { getRentalCars } from "../services/api/apiRentalCar";
import { ICar } from "../models/ICar";
import { errorCatch } from "../services/api/error.api";
import { CarItem } from "../components/CarItem";
import { CarModal } from "../components/CarModal";

export const CatalogPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [carList, setCarList] = useState<ICar[]>([]);

  const incrementPage = () => {
    if (carList.length / 8 > page) {
      setPage((prevState) => prevState + 1);
    }
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
          <CarList>
            {carList.length > 0 &&
              carList
                .slice(0, page * 8)
                .map((car) => <CarItem key={car.id} car={car} />)}
          </CarList>
          {carList.length / 8 > page && (
            <LoadMoreBtn onClick={() => incrementPage()}>Load more</LoadMoreBtn>
          )}
        </Container>
      </main>
      <Toaster position="top-right" />
    </>
  );
};
