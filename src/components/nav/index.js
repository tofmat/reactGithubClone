import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "../../client";
import slash from "../../assets/slash.svg";
import { user, SET_AUTH_USER } from "../../features/github/githubSlice";
import "./nav.css";
export const Nav = () => {
  const dispatch = useDispatch();
  async function signOut() {
    await supabase.auth.signOut();
    dispatch(SET_AUTH_USER(null));
  }
  const profile = useSelector(user);
  const [display, setDisplay] = useState(false);
  const onDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <header className="header">
        <div>
          <div className="flex items-center heading">
            <div className="mr-16 noMobile pointer">
              <svg
                className="fill-white"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </div>
            <div className="mobileTrigger fill-white">
              <svg
                height="24"
                className="octicon octicon-three-bars"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                aria-hidden="true"
                onClick={onDisplay}
              >
                <path
                  fillRule="evenodd"
                  d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                ></path>
              </svg>
            </div>
            <div className="mr-16 mobileLogo">
              <svg
                className="fill-white"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </div>
            <div className="flex items-center deskNav mr-5 noMobile">
              <div className="headSearch">
                <form action="" className="">
                  <label
                    htmlFor=""
                    className="form-control search-wrapper flex items-center"
                  >
                    <input
                      type="text"
                      placeholder="Search or jump to..."
                      className="form-control"
                    />
                    <img src={slash} alt="slash" className="mr-8" />
                  </label>
                </form>
              </div>
              <nav>
                <ul>
                  <li className="navLink">Pull requests</li>
                  <li className="navLink">Issues</li>
                  <li className="navLink">Marketplace</li>
                  <li className="navLink">Explore</li>
                </ul>
              </nav>
            </div>
            <div className="navIte">
              <a href="/">
                <svg
                  className="fill-white"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
                  <path
                    fillRule="evenodd"
                    d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="navIte noMobile">
              <a href="/">
                <svg
                  className="fill-white"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="imageMenu navIte noMobile">
              <a href="/" onClick={signOut}>
                <img
                  src={profile && profile.avatar_url}
                  alt="aas"
                  width="20px"
                  height="20px"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {display && (
        <>
          <div className="mobileHeader header noView">
            <div className="playground">
              <div className="flex deskNav columnFlex">
                <div className="headSearch">
                  <form action="" className="">
                    <label
                      htmlFor=""
                      className="form-control search-wrapper flex items-center"
                    >
                      <input
                        type="text"
                        placeholder="Search or jump to..."
                        className="form-control"
                      />
                      <img src={slash} alt="slash" className="mr-8" />
                    </label>
                  </form>
                </div>
                <nav>
                  <ul>
                    <li className="navLink">Desktop</li>
                    <li className="navLink">Pull requests</li>
                    <li className="navLink">Issues</li>
                    <li className="navLink">Marketplace</li>
                    <li className="navLink">Explore</li>
                    <li className="navLink">Settings</li>
                    <li className="navLink">
                      <div className="flex imageMenu">
                        <a href="/" className="mr-5">
                          <img
                            src={profile && profile.avatar_url}
                            alt="user"
                            width="20px"
                            height="20px"
                          />
                        </a>
                        tofmat
                      </div>
                    </li>
                    <li className="navLink">
                      <div className="flex imageMenu">
                        <svg
                          className="
                      octicon octicon-sign-out
                      v-align-middle
                      mr-5
                      fill-white
                    "
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          height="16"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"
                          ></path>
                        </svg>
                        Sign out
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
