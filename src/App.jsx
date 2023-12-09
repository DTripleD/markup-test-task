import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Sidebar isShown={isShown} setIsShown={setIsShown} />
      <Main setIsShown={setIsShown} />
    </>
  );
}

export default App;
