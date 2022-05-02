import "../assets/main.css";
import { Footer } from "../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { MainContent } from "../components/mainContent";
import { Nav } from "../components/nav";
import { RepoNav } from "../components/repoNav";
import { useEffect } from "react";
import {
  getRepos,
  getUser,
  authenicatedUser,
  loading,
} from "../features/github/githubSlice";
import Loader from "../components/loader";
function Repositories() {
  const isLoading = useSelector(loading);
  const authUser = useSelector(authenicatedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(authUser.user_metadata.preferred_username));
    dispatch(getRepos(authUser.user_metadata.preferred_username));
  }, [authUser, dispatch]);

  return (
    <div className="App">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Nav />
          <RepoNav />
          <MainContent />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Repositories;
