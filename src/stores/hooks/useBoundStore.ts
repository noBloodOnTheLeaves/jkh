import type { StateCreator } from "zustand";
import { create } from "zustand";
import type { UserSlice } from "../createUserStore";
import {createUserSlice} from "../createUserStore";

//подробнее тут https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern
type BoundState = UserSlice;

export type BoundStateCreator<SliceState> = StateCreator<
  BoundState,
  [],
  [],
  SliceState
  >;

export const useBoundStore = create<BoundState>()((...args) => ({
  ...createUserSlice(...args),
}));
