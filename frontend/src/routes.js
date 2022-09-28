import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import Studio from "./Pages/Studio";

export default function Anddress() {
    return(
        <BrowserRouter>
           <Routes>
                <Route exact path="*" element={<Welcome />} />
                <Route path="/infinity/home" element={<Home />} />
                <Route path="/infinity/Studio" element={<Studio />} />
            </Routes> 
        </BrowserRouter>
    )
}
