import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./components/firstPage/mainBody/MainBody";
import Signin from "./components/authenticate/Signin";
import Footer from "./components/firstPage/footer/Footer";
import SecondPage from "./components/secondPage/SecondPage";
import ThirdPage from "./components/thirdPage/ThirdPage";
import FourthPage from "./components/fourthPage/FourthPage";
import FifthPage from "./components/fifthPage/FifthPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/co2" element={<SecondPage/>}></Route>
          <Route path="/methane" element={<ThirdPage/>}></Route>
          <Route path="/water-vapor" element={<FourthPage />}></Route>
          <Route path="/nitrous-oxide" element={<FifthPage />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
