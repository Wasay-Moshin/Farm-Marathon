import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Home from "./Pages/Home";
import Carddata from "./Pages/Carddata";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route  path="/carddata" element={<Carddata />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
