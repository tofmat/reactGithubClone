import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    authenicatedUser: null,
    user: null,
    repos: [],
    orgs: [],
    stars: [],
    loading: false,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    SET_AUTH_USER: (state, action) => {
      state.authenicatedUser = action.payload;
    },
    SET_LOADING: (state, action) => {
      state.loading = action.payload;
    },
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_REPOS: (state, action) => {
      state.repos = action.payload;
    },
    SET_ORGS: (state, action) => {
      state.orgs = action.payload;
    },
    SET_STARS: (state, action) => {
      state.stars = action.payload;
    },
  },
});

export const {
  SET_USER,
  SET_REPOS,
  SET_ORGS,
  SET_AUTH_USER,
  SET_STARS,
  SET_LOADING,
} = githubSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getUser = (data) => async (dispatch) => {
  try {
    dispatch(SET_LOADING(true));
    let response = await axios.get(`https://api.github.com/users/${data}`);
    dispatch(SET_USER(response.data));
    dispatch(SET_LOADING(false));
  } catch (e) {
    dispatch(SET_LOADING(false));
    dispatch(SET_USER(null));
  }
};

export const getRepos = (data) => async (dispatch) => {
  try {
    dispatch(SET_LOADING(true));
    let response = await axios.get(
      `https://api.github.com/users/${data}/repos`
    );
    dispatch(SET_REPOS(response.data));
    dispatch(SET_LOADING(false));
  } catch (e) {
    dispatch(SET_LOADING(false));
    dispatch(SET_REPOS(null));
  }
};

export const clearRepos = () => (dispatch) => {
  dispatch(SET_REPOS([]));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const user = (state) => state.github.user;
export const loading = (state) => state.github.loading;
export const authenicatedUser = (state) => state.github.authenicatedUser;
export const repos = (state) => state.github.repos;
export const reposItemCount = (state) => state.github.repos.length;

export default githubSlice.reducer;
