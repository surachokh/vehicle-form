import { all } from "redux-saga/effects";
import { watchFetchCustomer } from "./customerSaga";

import {
  watchCreateVehicle,
  watchFetchSpecificVehicle,
  watchFetchVehicles,
  watchUpdateSpecificVehicle,
} from "./vehicleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchVehicles(),
    watchFetchSpecificVehicle(),
    watchUpdateSpecificVehicle(),
    watchCreateVehicle(),
    watchFetchCustomer(),
  ]);
}
