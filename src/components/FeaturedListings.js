import React from "react";
import Navigation from "./Navigation";
import Footer from "../components/Footer";
import '../app/App.css';
import { Outlet } from "react-router-dom";

export default function FeaturedListings(props) {
    const {listings} = props;
    return (
        <div>
            <h2>Featured Listings</h2>
        </div>
    )
}