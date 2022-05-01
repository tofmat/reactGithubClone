import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    user: null,
    repos: [],
    orgs: [],
    stars: [],
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

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

export const { SET_USER, SET_REPOS, SET_ORGS, SET_STARS } = githubSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getUser = () => async (dispatch) => {
  try {
    let response = await axios.get(
      `https://api.github.com/users/${process.env.REACT_APP_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );

    dispatch(SET_USER(response.data));
  } catch (e) {
    dispatch(SET_USER(null));
  }
};

export const getRepos = () => async (dispatch) => {
  try {
    let response = await axios.get(
      `https://api.github.com/users/${process.env.REACT_APP_USERNAME}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );
    dispatch(SET_REPOS(response.data));
  } catch (e) {
    dispatch(SET_REPOS(null));
  }
};

export const getNewRepos = (data) => async (dispatch) => {
  try {
    let response = await axios.get(
      `https://api.github.com/users/${process.env.REACT_APP_USERNAME}/repos?page=${data}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );
    dispatch(SET_REPOS(response.data));
  } catch (e) {
    dispatch(SET_REPOS(null));
  }
};

export const clearRepos = () => (dispatch) => {
  dispatch(SET_REPOS([]));
};

export const getOrgs = () => async (dispatch) => {
  try {
    let response = await axios.get("https://api.github.com/user/orgs", {
      headers: {
        Authorization: `token ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`,
      },
    });
    dispatch(SET_ORGS(response.data));
  } catch (e) {
    dispatch(SET_ORGS(null));
  }
};

export const getStarred = () => async (dispatch) => {
  try {
    let response = await axios.get("https://api.github.com/user/starred", {
      headers: {
        Authorization: `token ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`,
      },
    });
    dispatch(SET_STARS(response.data));
  } catch (e) {
    dispatch(SET_STARS(null));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const user = (state) => state.github.user;
export const repos = (state) => state.github.repos;
export const reposItemCount = (state) => state.github.repos.length;
export const orgs = (state) => state.github.orgs;
export const stars = (state) => state.github.stars;
export const starsItemCount = (state) => state.github.stars.length;

export default githubSlice.reducer;
