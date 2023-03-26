import { Book } from "../../types/types";

export type CurrentBookSliceState = {
  currentBook: Book | {},
  status: string,
}