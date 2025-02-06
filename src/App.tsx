import { ReactNode, useState } from "react";

import "./App.css";
import { useCurrentView } from "./routes/utils";

const App = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const { currentView } = useCurrentView();

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}, currentView: {currentView}
        </button>
      </div>
      {children}
    </>
  );
};

export default App;
