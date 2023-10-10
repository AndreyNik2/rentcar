import { FC, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Container } from "../components/Container";
import { CarList, H1, LoadMoreBtn } from "./FavoritesPage.styled";
import { ICar } from "../models/ICar";
import { getRentalCars } from "../services/api/apiRentalCar";
import { errorCatch } from "../services/api/error.api";
import { CarItem } from "../components/CarItem";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

export const FaviritesPage: FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favoriteReducer.list);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [favoriteList, setFavoriteList] = useState<ICar[]>([])

  const incrementPage = () => {
    if (favoriteList.length / 8 > page) {
      setPage((prevState) => prevState + 1);
    }
  };

  const getFavorites = (id: string[], data: ICar[]) => {
    return id.reduce((acc: ICar[], item: string) => {
      const findFavorete = data.find(el => el.id === item)
      return findFavorete ? [...acc, findFavorete] : acc
    },[])
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRentalCars();
        if (data && favorites.length > 0) {
          setFavoriteList(getFavorites(favorites, data));
        }
        setIsLoading(false);
      } catch (error) {
        errorCatch(error);
        toast.error("Something went wrong :( Try reloading the page.");
      }
    }
    fetchData();
  }, [favorites]);

  return (
    <>
      <main>
        <Toaster position="top-right" />
        <Container>
          <H1>Favorires</H1>
          <CarList>
            {favoriteList.length > 0 &&
              favoriteList
                .slice(0, page * 8)
                .map((car) => (
                  <CarItem
                    key={car.id}
                    car={car}
                  />
                ))}
          </CarList>
          {favoriteList.length / 8 > page && (
            <LoadMoreBtn onClick={() => incrementPage()}>Load more</LoadMoreBtn>
          )}
        </Container>
      </main>
      <Toaster position="top-right" />
    </>
  );
};



