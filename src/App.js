import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AboutUS from "./Pages/AboutUS/AboutUS";

import Home from './Pages/Home/Home/Home';
import SingleTeacher from "./Pages/SingleTeacher/SingleTeacher";
import Teachers from "./Pages/Teachers/Teachers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teacher/:id" element={<SingleTeacher />} />
          <Route path="/contact" element={<AboutUS />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
