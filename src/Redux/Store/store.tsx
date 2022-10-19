import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas/rootSaga";
import { customerSlice } from "../Slices/customerSlice";
import { vehicleSlice } from "../Slices/vehicleSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  vehicle: vehicleSlice.reducer,
  customer: customerSlice.reducer,
});

export default configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
