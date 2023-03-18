import { atom } from "recoil";
import { initialValues } from "../utils/data";

export const currentPageState = atom({
  key: "currentPageState",
  default: 0,
});

export const formState = atom({
  key: "formState",
  default: "default",
});

export const modal = atom({
  key: "modalState",
  default: false,
});

export const submitModal = atom({
  key: "submitModalState",
  default: false,
});

export const submittedData = atom({
  key: "submittedData",
  default: initialValues,
});
