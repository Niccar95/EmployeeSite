import axios, { type AxiosResponse } from "axios";

export const get = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get<T>(url);
  return response.data;
};
