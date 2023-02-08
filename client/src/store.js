import { legacy_createStore as createStore } from '@reduxjs/toolkit';

const initialState = {
  isLogin: localStorage.getItem('authorization') ? true : false,
  memberId: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      state.isLogin = true;
      state.memberId = action.payload.memberId;
      return state;
    case 'LOG_OUT':
      state.isLogin = false;
      state.memberId = null;
      return state;
    default:
      return state;
  }
};

const store = createStore(loginReducer);

export default store;
