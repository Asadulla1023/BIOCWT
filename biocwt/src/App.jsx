import "./App.css";
import "./components/";
import Header from "./components/pages/home/header/Header";
import Gallary from "./components/pages/gallary/Gallary";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Route, Link} from ""
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Header/>} component={Header} />
          <Route exact path="/gallary" element={<Gallary/>} component={Gallary} />
          <Route exact path="/AboutUs" element={<AboutUs/>} component={AboutUs} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
