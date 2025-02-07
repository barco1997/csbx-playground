import { ReactNode, useState } from "react";

import "./main.css";
import { useCurrentView } from "../../routes/utils";

export const Main = ({ children }: { children: ReactNode }) => {
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
