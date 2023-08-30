import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./page/HomePage";
import History from "./page/History";
import Browse from "./page/Browse";

export default function RouteApp () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/history" element={<History/>} />
                    <Route path="/browse" element={<Browse/>} />


                </Routes>
            </Router>
        </>
    )
}