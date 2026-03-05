import Conversor from "./routes/Conversor";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/conversor" element={<Conversor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
