import { useState } from "react";

import "./App.css";
import { useCurrentView } from "./routes/utils";
import { Route } from "./routes/types";

const App = ({ routes }: { routes: Route[] }) => {
  const [count, setCount] = useState(0);
  const { currentView } = useCurrentView();

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}, currentView: {currentView}
        </button>
      </div>
    </>
  );
};

export default App;
