import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(watchFetchData);

export default store;
