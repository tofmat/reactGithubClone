import "./assets/main.css";
import { Footer } from "./components/footer";
import { MainContent } from "./components/mainContent";
import { Nav } from "./components/nav";
import { RepoNav } from "./components/repoNav";
import { useEffect } from "react";
import {
  getOrgs,
  getRepos,
  getStarred,
  getUser,
} from "./features/github/githubSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getRepos());
    dispatch(getOrgs());
    dispatch(getStarred());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <RepoNav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
