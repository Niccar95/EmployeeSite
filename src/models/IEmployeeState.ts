import type { IEmployee } from "./IEmployee";

export interface IEmployeeState {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IEmployee[];
}
