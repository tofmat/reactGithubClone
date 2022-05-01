import "./assets/main.css";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";
import { RepoNav } from "./components/repoNav";

function App() {
  return (
    <div className="App">
      <Nav />
      <RepoNav />
      <Footer />
    </div>
  );
}

export default App;
