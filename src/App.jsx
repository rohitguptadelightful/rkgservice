import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Disclaimer from "./pages/Disclaimer";
import Privacypolicy from "./pages/Privacypolicy";
import Termsandconditions from "./pages/Termsandconditions";
import NoPage from "./pages/NoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}> </Route>
        <Route path="/privacypolicy" element={<Privacypolicy />}> </Route>
        <Route path="/termsandconditions" element={<Termsandconditions />}> </Route>
        <Route path="*" element={<NoPage />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App