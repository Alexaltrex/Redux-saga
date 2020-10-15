import appReducer from "./app-reducer";
import {applyMiddleware, createStore, combineReducers, Middleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from "../SAGA/saga";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    app: appReducer
});

const sagaMiddleware = createSagaMiddleware();
const middleware: Array<Middleware> = [sagaMiddleware];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

// @ts-ignore
window.store = store;

export type StateType = ReturnType<typeof rootReducer>
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type GetActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;