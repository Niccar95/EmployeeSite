import type { IEmployeeState } from "@/models/IEmployeeState";
import { get } from "./EmployeeBase";

export const allEmployeeData = async (
  page: number = 1
): Promise<IEmployeeState> => {
  return await get<IEmployeeState>(`https://reqres.in/api/users?page=${page}`);
};
