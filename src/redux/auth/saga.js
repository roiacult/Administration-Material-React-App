import { LOGIN_USER } from "./constants";

import { loginUserSuccss, loginUserFail } from "./actions";
import API from "../../API";
import { setSession } from "../../helpers/authUtils";
import { put, takeEvery } from "redux-saga/effects";

function* login({ payload }) {
  console.log(payload);
  try {
    let responce = yield API.post("/rest-auth/login/", payload);
    let responce2 = yield API.get("/userwithtoken/", {
      headers: {
        Authorization: `token ${responce.data.key}`,
      },
    });
    setSession(responce.data.key, responce2.data);
    yield put(loginUserSuccss(responce2.data));
  } catch (error) {
    console.log(error);
    yield put(loginUserFail);
  }
  yield 0;
}

export function* watchLogin() {
  yield takeEvery(LOGIN_USER, login);
}

const authSaga = [watchLogin()];

export default authSaga;
