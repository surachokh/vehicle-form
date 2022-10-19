import {
  takeEvery,
  put,
  call,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getCustomers } from "../../Apis/customerApi";
import { vehicleResponse } from "../../Types/vehicleType";
import { STORE_CUSTOMERS } from "../Slices/customerSlice";

export function* watchFetchCustomer() {
  yield takeEvery("REQUEST_CUSTOMER", fetchCustomer);
}

function* fetchCustomer(action?: any): Generator<
  CallEffect<any> | PutEffect<any>,
  void,
  vehicleResponse
> {
  const customers: any = yield call(getCustomers, action.payload ?? action.initPayload);
  yield put(STORE_CUSTOMERS(customers));
}
