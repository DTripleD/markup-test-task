import "./App.css";

import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <h2 className="hello__message">Hello Evano 👋🏼,</h2>
        <Table />
      </div>
    </>
  );
}

export default App;
