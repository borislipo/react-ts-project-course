import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="lazy1" >To lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2" >To lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3" >To lazy3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='lazy1' element={<LazyPage1 />} />
                <Route path='lazy2' element={<LazyPage2 />} />
                <Route path='lazy3' element={<LazyPage3 />} />
                <Route path="*" element={<div>not found</div>} />
            </Routes>
        </div>
    )
}

export default LazyLayout