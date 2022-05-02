import "./assets/main.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { supabase } from "./client";
import { SET_AUTH_USER, authenicatedUser } from "./features/github/githubSlice";
import Repositories from "./pages/repository";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector(authenicatedUser);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  });
  async function checkUser() {
    const user = supabase.auth.user();
    dispatch(SET_AUTH_USER(user));
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }
  if (authUser) {
    return (
      <div className="App">
        <Repositories />
      </div>
    );
  }
  return (
    <div className="fullPage ">
      <div className="mainContent">
        <div className="middle-box">
          <h3>
            Hello, Welcome to a project that shows your first 20 github
            repository. With the ability to filter through, use dark mode, login
            with github OAuth, and is fully responsive{" "}
          </h3>
          <p>
            This was built with react js, pure css, axios for api calls, and the
            github api for fetching data, also using supabase for
            authentications using the github OAuth, and also Redux Toolkit for
            fetching data, and managing state
          </p>
          <button onClick={signInWithGithub}>Signin with Github</button>
        </div>
      </div>
    </div>
  );
}

export default App;
