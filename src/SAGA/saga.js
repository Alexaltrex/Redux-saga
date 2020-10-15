import {appAC, GET_CHARACTERS,} from "../store/app-reducer";
import {takeEvery, call, put, all} from "redux-saga/effects";
import {charactersAPI} from "../DAL/api";

export function* watcherGetCharacters(){
   yield takeEvery(GET_CHARACTERS, workerGetCharacters);
}

export function* workerGetCharacters(action){
    try {
        yield put(appAC.setLoading(true))
        const characters = yield call(getCharacters, action.currentPage);
        yield put(appAC.setCharacters(characters));
        yield put(appAC.setLoading(false));
    } catch(error) {
        yield put(appAC.setLanError(true))
    }

}

const getCharacters = (currentPage) => {
      return charactersAPI.getCharacters(currentPage)
};

export function* rootSaga() {
    yield all([watcherGetCharacters()])
}