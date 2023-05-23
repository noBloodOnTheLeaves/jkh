import type {BoundStateCreator} from "./hooks/useBoundStore";
import {GridColumnVisibilityModel} from "@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces";

export type userTheme = 'light' | 'dark';


export type User = {
  name: string,
  login: string,
}

export type UserSlice = {
  name: string,
  login: string,
  role: string,
  materialTheme: userTheme,
  tableContractor: GridColumnVisibilityModel,
  setUser: (newUser: User) => void;
  setTableView: (model: GridColumnVisibilityModel) => void;
  setMaterialTheme: (theme: userTheme) => void;
};

export const createUserSlice: BoundStateCreator<UserSlice> = (set) => ({
  name: 'Гулуев Салман Азизович',
  login: 'guluev.sa@regenergy.ru',
  role: 'user',
  materialTheme: 'dark',
  tableContractor: {
    number: true, date: true, updated_at: true, task_name: true, street: true,
    house: true, room: true, period: true, executor: true, title: true, description: true,
    applicant: true, applicant_phone: true, responsible: true, responsible_phone: true
  },
  setUser: (newUser: User) => set({name: newUser.name, login: newUser.login}),
  setTableView: (model: GridColumnVisibilityModel) => set({tableContractor: model}),
  setMaterialTheme: (theme: userTheme) => set({materialTheme: theme})
});
