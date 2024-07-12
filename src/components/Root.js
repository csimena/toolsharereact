import React from "react";
import Navigation from "./Navigation";
import Footer from "../components/Footer";
import '../app/App.css';
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}