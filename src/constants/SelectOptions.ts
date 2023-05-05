import { StudentRegisterRequest } from "@backendTypes";


export const EXPECTED_CONTRACT_TYPE_OPTIONS: StudentRegisterRequest["expectedContractType"][] = [
    "Brak preferencji",
    "Hybrydowo",
    "Możliwe B2B",
    "Możliwe UZ/UoD",
    "Tylko UoP",
];

export const EXPECTED_TYPE_WORK_OPTIONS: StudentRegisterRequest["expectedTypeWork"][] = [
    "Bez znaczenia",
    "Hybrydowo",
    "Gotowość do przeprowadzki",
    "Na miejscu",
    "Wyłącznie zdalnie",
];