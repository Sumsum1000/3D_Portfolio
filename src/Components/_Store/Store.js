import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Arch_1 } from "../../Data/Architecture/Arch_1";
import { Arch_2 } from "../../Data/Architecture/Arch_2";
import { Arch_3 } from "../../Data/Architecture/Arch_3";
import { Arch_4 } from "../../Data/Architecture/Arch_4";
import { Arch_5 } from "../../Data/Architecture/Arch_5";
import { Arch_6 } from "../../Data/Architecture/Arch_6";
import { Exh_1 } from "../../Data/Exhibitions/Exh_1";
import { Exh_2 } from "../../Data/Exhibitions/Exh_2";
import { Exh_3 } from "../../Data/Exhibitions/Exh_3";
import { Exh_4 } from "../../Data/Exhibitions/Exh_4";
import { Exh_5 } from "../../Data/Exhibitions/Exh_5";
import { Exh_6 } from "../../Data/Exhibitions/Exh_6";
import { Exh_7 } from "../../Data/Exhibitions/Exh_7";
import { Exh_8 } from "../../Data/Exhibitions/Exh_8";
import { Exh_9 } from "../../Data/Exhibitions/Exh_9";
import { Personal_1 } from "../../Data/Personal/Personal_1";
import { Personal_2 } from "../../Data/Personal/Personal_2";
import { Personal_3 } from "../../Data/Personal/Personal_3";
import { Personal_4 } from "../../Data/Personal/Personal_4";
import { Personal_5 } from "../../Data/Personal/Personal_5";
import { Personal_6 } from "../../Data/Personal/Personal_6";

const dataMap = {
  architecture: [Arch_1, Arch_2, Arch_3, Arch_4, Arch_5, Arch_6],
  exhibitions: [Exh_1, Exh_2, Exh_3, Exh_4, Exh_5, Exh_6, Exh_7, Exh_8, Exh_9],
  personal: [
    Personal_1,
    Personal_2,
    Personal_3,
    Personal_4,
    Personal_5,
    Personal_6,
  ],
};

const TopicSlice = createSlice({
  name: "topicListPage",
  initialState: { list: [] },
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },
});

const TileDetailsSlice = createSlice({
  name: "details",
  initialState: { listDetails: [] },
  reducers: {
    setDetails(state, action) {
      state.listDetails =
        dataMap[`${action.payload.subject}`][action.payload.id - 1];
    },
  },
});

const CloseupSlice = createSlice({
  name: "closeup",
  initialState: { currentCloseup: "", currentItem: {} },
  reducers: {
    setCloseup(state, action) {
      // state.currentCloseup =
      //   dataMap[`${action.payload.subject}`][action.payload.listNum - 1][
      //     action.payload.id - 1
      //   ].src; //Arch_1[0].src;

      const subject = action.payload.subject;
      const listNum = action.payload.listNum; // `Arch_${listNum}`
      const currentList = dataMap[`${subject}`][`${listNum - 1}`];
      const currentItem = currentList[`${action.payload.id - 1}`];
      console.log("CURRENTiTEM : ", currentItem);

      state.currentCloseup = currentItem.src;
    },
    setItem(state, action) {
      //console.log("setItem", action.payload);
      state.currentItem = action.payload;
    },
    setCloseupRClick(state, action) {
      //console.log("Item ", state.currentItem);
      console.log("A ", state.currentItem);
      state.currentCloseup =
        dataMap[`${action.payload.subject}`][action.payload.listNum - 1][
          action.payload.id + 1
        ].src; //Arch_1[0].src;
      //   state.currentCloseup =
      //     dataMap[`${state.currentItem.subject}`][state.currentItem.listNum - 1][
      //       state.currentItem.id + 1
      //     ][state.currentItem.src]; //Arch_1[0].src;
    },
  },
});

export const CurrentItemSlice = createSlice({
  name: "currentItem",
  initialState: { currentItem: {} },
  reducers: {
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },
  },
});

export const Store = configureStore({
  reducer: {
    topicListPage: TopicSlice.reducer,
    details: TileDetailsSlice.reducer,
    closeup: CloseupSlice.reducer,
    currentItem: CurrentItemSlice.reducer,
  },
});

export const TopicListActions = TopicSlice.actions;
export const TileDetailsActions = TileDetailsSlice.actions;
export const CloseupActions = CloseupSlice.actions;
export const CurrenItemActions = CurrentItemSlice.actions;
