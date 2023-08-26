import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./HomePage";

export default function RouteApp () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            </Router>
        </>
    )
}