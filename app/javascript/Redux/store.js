import { configureStore } from "@reduxjs/toolkit";
import Messagereducer from "./reducer";

const store = configureStore({
  reducer: {
    greeting: Messagereducer,
  },
});

export default store;
