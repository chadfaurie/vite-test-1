import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Example from "./components/example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Example />
      </div>
    </div>
  );
}

export default App;
