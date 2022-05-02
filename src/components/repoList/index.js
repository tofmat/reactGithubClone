import React, { useState } from "react";
import "./repoList.css";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { repos } from "../../features/github/githubSlice";

export const RepoList = () => {
  const repositories = useSelector(repos);
  const [search, setSearch] = useState("");

  // const [filteredItem] = useState(
  //   repositories.filter((item) => {
  //     return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  //   })
  // );

  return (
    <div>
      <div class="repoList">
        <div class="flex repoSearch scrollX">
          <div class="flex-auto">
            <input
              type="text"
              placeholder="Find a repository..."
              class="repoInput"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div class="flex">
            <button class="mxx-6 notGreen flex items-center">
              <span>Type:</span> All
              <span class="dropdown-caret ml-6"></span>
            </button>
            <button class="mxx-6 notGreen notGreen flex items-center">
              <span>Language:</span> All
              <span class="dropdown-caret ml-6"></span>
            </button>
            <button class="ml-6 text-center flex items-center">
              <svg
                class="octicon octicon-repo"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              New
            </button>
          </div>
        </div>

        {repositories.slice(0, 20).map((repo) => (
          <>
            <div className="flex repoItem" key={repo.name}>
              <div className="left">
                <h1>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </h1>
                {repo.fork && (
                  <small class="noRepo">Forked from {repo.full_name}</small>
                )}
                {repo.description && <p>{repo.description}</p>}
                <div className="flex">
                  {repo.language && (
                    <div class="flex items-center">
                      {repo.language === "HTML" && (
                        <span
                          class="repo-language-color mr-5"
                          // eslint-disable-next-line react/style-prop-object
                          style={{ backgroundColor: "#e34c26" }}
                        ></span>
                      )}
                      {repo.language === "JavaScript" && (
                        <span
                          class="repo-language-color mr-5"
                          // eslint-disable-next-line react/style-prop-object
                          style={{ backgroundColor: "#f1e05a" }}
                        ></span>
                      )}
                      {repo.language === "SCSS" && (
                        <span
                          class="repo-language-color mr-5"
                          // eslint-disable-next-line react/style-prop-object
                          style={{ backgroundColor: "#c6538c" }}
                        ></span>
                      )}
                      {repo.language === "CSS" && (
                        <span
                          class="repo-language-color mr-5"
                          // eslint-disable-next-line react/style-prop-object
                          style={{ backgroundColor: "#563d7c" }}
                        ></span>
                      )}
                      {repo.language === "Vue" && (
                        <span
                          class="repo-language-color mr-5"
                          // eslint-disable-next-line react/style-prop-object
                          style={{ backgroundColor: "#2c3e50" }}
                        ></span>
                      )}
                      {repo.language === "HTML" && (
                        <span
                          class="repo-language-color mr-5"
                          // eslint-disable-next-line react/style-prop-object
                          style={{ backgroundColor: "#e34c26" }}
                        ></span>
                      )}
                      <p class="mr-16">{repo.language}</p>
                    </div>
                  )}
                  <p>
                    {" "}
                    Updated
                    <span>
                      <Moment
                        format="MMMM Do YYYY, h:mm:ss a"
                        fromNow
                        interval={1000}
                      >
                        {repo.updated_at}
                      </Moment>
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div class="right">
                <button class="flex items-align mb-15">
                  <svg
                    class="octicon octicon-star mr-5 blacckk"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  Star
                </button>
              </div>
            </div>
          </>
        ))}

        {repositories.length === 0 && (
          <h1 class="text-center noRepo">There's no repo here at the moment</h1>
        )}
      </div>
    </div>
  );
};
