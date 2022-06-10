import { combineReducers } from "redux"
import authReducer from "./auth"
import createReducer from "./createQuiz"
import quizReducer from "./quiz"

export default combineReducers({
  quiz: quizReducer,
  createQuiz: createReducer,
  auth: authReducer
})