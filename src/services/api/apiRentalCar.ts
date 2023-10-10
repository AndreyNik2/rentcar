import axios from "axios";
import { ICar } from "../../models/ICar";

export const getRentalCars = async () => {
  try {
    const { data } = await axios<ICar[]>({
      method: "get",
      url: "https://652150c8a4199548356d0ba9.mockapi.io/api/v1/Rentlist",
    });
    return data;
  } catch (error) {
    return;
  }
};

export const getRentalCarById = async (id: string) => {
  try {
    const { data } = await axios<ICar>({
      method: "get",
      url: `https://652150c8a4199548356d0ba9.mockapi.io/api/v1/Rentlist/${id}`,
    });
    return data;
  } catch (error) {
    return;
  }
};
