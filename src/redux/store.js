import { createStore, applyMiddlware, combineReducers } from "redux"
import logger from "redux-logger"

import rootReducer from "./root-reducer"

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddlware(...middlewares))

export default store