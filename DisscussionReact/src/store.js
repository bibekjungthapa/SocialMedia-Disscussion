import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from './features/counter/counter.slice'
import logger from 'redux-logger'
import usersSlice from "./features/Users/users.slice";
import redboxSlice from "./features/Users/redbox.slice";
import loginSlice from "./features/Users/login.slice"
import registerSlice from "./features/Users/register.slice";
import homeSlice from "./components/home.slice";
import forumSlice from "./components/forum.slice";
import sidebarSlice from "./components/sidebar.slice";

const reducer = combineReducers({
  count: counterSlice,
  users:usersSlice,
  Redbox:redboxSlice,
  login:loginSlice,
register:registerSlice,
home:homeSlice,
forum:forumSlice,
sidebar:sidebarSlice

});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
