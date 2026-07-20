import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ChooseRole from "./pages/ChooseRole";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/choose-role" element={<ChooseRole />} />
    </Routes>
  );
}

export default App;