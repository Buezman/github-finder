import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  let client_id;
  let client_secret;

  if (process.env.NODE_ENV !== "production") {
    client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
    client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    client_id = process.env.GITHUB_CLIENT_ID;
    client_secret = process.env.GITHUB_CLIENT_SECRET;
  }

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Clear users search
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Get single user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?page=3&per_page=10&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
