import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  questions: [];
  name: "";
  phnNumber: "";
};

const initialState: stateType = {
  questions: [],
  name: "",
  phnNumber: "",
};

const mySlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {},
});

export default mySlice.reducer;
