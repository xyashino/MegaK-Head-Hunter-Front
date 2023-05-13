import { Filtration, PageMeta } from "@backendTypes";

export interface QueryData {
  url: string;
  pagination: PageMeta;
  name: string;
  filtration: Filtration;
  refresh:boolean;
}
