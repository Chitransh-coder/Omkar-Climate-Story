import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./components/firstPage/mainBody/MainBody";
import Signin from "./components/authenticate/Signin";
import Footer from "./components/firstPage/footer/Footer";
import SecondPage from "./components/secondPage/SecondPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/SecondPage" element={<SecondPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
