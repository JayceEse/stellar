import { Home, Plan, Discover, Check, NoPage } from "./Pages";
import { Navbar } from "./componets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/planatrip" element={<Plan />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/checkflights" element={<Check />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
