import { configureStore } from "@reduxjs/toolkit";
import { companySlice } from "./features/index.tsx";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    company: companySlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
