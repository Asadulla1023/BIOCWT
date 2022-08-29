import "./App.css";
import "./components/";
import Header from "./components/pages/home/header/Header";
import Gallary from "./components/pages/gallary/Gallary";
import AboutPage from "./components/pages/about/AboutPage";
import Contact from "./components/pages/Contact/Contact"
import { PriceList } from "./components/";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Header/>} component={Header} />
          <Route exact path="/gallary" element={<Gallary/>} component={Gallary} />
          <Route exact path="/about" element={<AboutPage/>} component={AboutPage}/>
          <Route exact path="/contact" element={<Contact/>} component={Contact}/>
          <Route exact path="/" element={<Header />} component={Header} />
          <Route exact path="/gallary" element={<Gallary />} component={Gallary} />
          <Route exact path="/about" element={<AboutPage />} component={AboutPage} />
          <Route exact path="/price" element={<PriceList />} component={PriceList} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
