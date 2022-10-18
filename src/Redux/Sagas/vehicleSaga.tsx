import { useNavigate } from "react-router-dom";
import { takeEvery, put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { getVehicles, getVehicle, updateVehicle, postVehicle } from "../../Apis/vehicleApi";
import { vehicleResponse } from "../../Types/vehicleType";
import { STORE_VEHICLES, STORE_VEHICLE } from "../Slices/vehicleSlice";

export function* watchFetchVehicles() {
  yield takeEvery("REQUEST_VEHICLE", fetchVehicles);
}
export function* watchFetchSpecificVehicle() {
  yield takeEvery("REQUEST_SPECIFIC_VEHICLE", fetchSpecificVehicle);
}
export function* watchUpdateSpecificVehicle() {
  yield takeEvery("UPDATE_SPECIFIC_VEHICLE", updateSpecificVehicle);
}
export function* watchCreateVehicle() {
  yield takeEvery("CREATE_VEHICLE", createVehicle);
}

function* fetchVehicles(): Generator<CallEffect<vehicleResponse> | PutEffect<any>, void, vehicleResponse> {
  const vehicles: any = yield call(getVehicles);
  yield put(STORE_VEHICLES(vehicles));
}

function* fetchSpecificVehicle(action: any): Generator<CallEffect<vehicleResponse> | PutEffect<any>, void, vehicleResponse> {
  const vehicle: any = yield call(getVehicle, action.uid);
  yield put(STORE_VEHICLE(vehicle));
}

function* updateSpecificVehicle(action: any): Generator<CallEffect<any>, void, any> {
  const response: any = yield call(updateVehicle, action.values, action.uid);
  console.log('Success', response);
}

function* createVehicle(action: any): Generator<CallEffect<any>, void, any> {
  const response: any = yield call(postVehicle, action.values);
  return response;
}
