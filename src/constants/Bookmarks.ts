import { BookmarkData } from "../types/BookmarkData";
import { PageRouter } from "@enums/page-router.enum";

export const ADMIN_BOOKMARKS: BookmarkData[] = [
  { text: "Dodaj kursantów", to: PageRouter.AdminStudents },
  { text: "Dodaj użytkowników HR", to: PageRouter.AdminHr },
];

export const STUDENT_BOOKMARKS: BookmarkData[] = [
  { text: "Panel", to: PageRouter.StudentPanel },
  { text: "Edytuj Cv", to: PageRouter.StudentEdit },
];

export const HR_BOOKMARKS: BookmarkData[] = [
  { text: "Dostępni Kursanci", to: PageRouter.HrStudents },
  { text: "Do rozmowy", to: PageRouter.HrTalk },
];
