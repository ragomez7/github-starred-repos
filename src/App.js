import { useState } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import RepoList from "./RepoList";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <main className="App">
      <SearchBar setUserName={setUserName} />
      <RepoList userName={userName} />
    </main>
  );
}

export default App;
