import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./components/firstPage/mainBody/MainBody";
import SecondPage from "./components/secondPage/SecondPage";
import ThirdPage from "./components/thirdPage/ThirdPage";

import FinalPage from "./components/finalpage/FinalPage";
import SixthPage from "./components/sixthPage/SixthPage";
import FourthPage from "./components/fourthPage/FourthPage";
import FifthPage from "./components/fifthPage/FifthPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody/>}></Route>
          <Route path="/co2" element={<SecondPage/>}></Route>
          <Route path="/methane" element={<ThirdPage/>}></Route>

          <Route path="/mapping" element={<FinalPage/>}></Route>
          <Route path="/chlorofluorocarbon" element={<SixthPage/>}></Route>
          <Route path="/water-vapor" element={<FourthPage />}></Route>
          <Route path="/nitrous-oxide" element={<FifthPage />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
