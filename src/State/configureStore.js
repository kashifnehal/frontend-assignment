import { configureStore } from "@reduxjs/toolkit";

import kickStarterReducer from "./reducers/kickStarterReducer";

const store = configureStore({
  reducer: {
    kickStarter: kickStarterReducer,
  },
});

export default store;
