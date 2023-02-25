import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ArchData } from "../../Data/ArchData";
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
import img from "../../Images/Subjects/Exhibition.jpg";
import img3 from "../../Images/Subjects/Personal.jpg";

const dataMap = {
  architecture: [Arch_1, Arch_2, Arch_3, Arch_4, Arch_5, Arch_6],
  exhibitions: [Exh_1, Exh_2, Exh_3, Exh_4, Exh_5, Exh_6, Exh_7, Exh_8, Exh_9],
};

// const closeupMap = {
//     architecture: {
//       Arch_1: [],
//     exhibitions: [],
//   }

// const closeupMap = {
//   architecture: {
//     Arch_1: [
//       "Arch_1_1",
//       "Arch_1_2",
//       "Arch_1_3",
//       "Arch_1_4",
//       "Arch_1_5",
//       "Arch_1_6",
//     ],
//     Arch_2: [Arch_2_1, Arch_2_2, Arch_2_3],
//     Arch_3: [Arch_3_1],
//     Arch_4: [Arch_4_1],
//     Arch_5: [Arch_5_1],
//     Arch_6: [Arch_6_1],
//   },
//   exhibitions: {
//     Exh_1: [Exh_1_1, Exh_1_2, Exh_1_3, Exh_1_4, Exh_1_5, Exh_1_6],
//     Exh_2: [Exh_2_1, Exh_2_2, Exh_2_3, Exh_2_4, Exh_2_5],
//     Exh_3: [Exh_3_1, Exh_3_2, Exh_3_3, Exh_3_4, Exh_3_5],
//     Exh_4: [Exh_4_1, Exh_4_2, Exh_4_3, Exh_4_4, Exh_4_5, Exh_4_6],
//     Exh_5: [Exh_5_1, Exh_5_2, Exh_5_3, Exh_5_4, Exh_5_5, Exh_5_6],
//     Exh_6: [Exh_6_1, Exh_6_2, Exh_6_3, Exh_6_4, Exh_6_5, Exh_6_6],
//     Exh_7: [Exh_7_1, Exh_7_2, Exh_7_3, Exh_7_4],
//     Exh_8: [Exh_8_1, Exh_8_2, Exh_8_3, Exh_8_4, Exh_8_5],
//   },
// };

const TopicSlice = createSlice({
  name: "topicListPage",
  initialState: { list: [] },
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    setArchList(state) {
      state.list = ArchData;
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
  initialState: { currentCloseup: img },
  reducers: {
    setCloseup(state, action) {
      //   state.currentCloseup = closeupMap["architecture"]["Exh_3"][2];
      //state.currentCloseup = dataMap.architecture.Arch_2;
      state.currentCloseup =
        dataMap[`${action.payload.subject}`][action.payload.listNum - 1][
          action.payload.id - 1
        ].src; //Arch_1[0].src;
    },
  },
});

// {
//     name: "Arch_1_1",
//     listNum: 1,
//     subject: "architecture",
//     type: "img",
//     id: 1,
//     key: 1,
//     src: Arch_1_1,
//     title: "Nurit Leshem_1",
//     text: "",
//   },

export const Store = configureStore({
  reducer: {
    topicListPage: TopicSlice.reducer,
    details: TileDetailsSlice.reducer,
    closeup: CloseupSlice.reducer,
  },
});

export const TopicListActions = TopicSlice.actions;
export const TileDetailsActions = TileDetailsSlice.actions;
export const CloseupActions = CloseupSlice.actions;
