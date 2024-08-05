import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem("theme") ?? "" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme ? "" : "dark";
      localStorage.setItem("theme", state.theme);
    },
  },
});

const store = configureStore({
  reducer: { theme: themeSlice.reducer },
});

export const themeActions = themeSlice.actions;

export default store;
