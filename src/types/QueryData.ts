import { Filtration, PageMeta } from "@backendTypes";


export interface QueryFiltration extends Omit<Filtration, 'canTakeApprenticeship'| 'expectedTypeWork' | 'expectedContractType'>{
  canTakeApprenticeship: boolean | "";
  expectedTypeWork: Filtration['expectedTypeWork'][];
  expectedContractType: Filtration['expectedContractType'][];
}


export interface QueryData {
  url: string;
  pagination: PageMeta;
  name: string;
  filtration: QueryFiltration;
  refresh:boolean;
}
