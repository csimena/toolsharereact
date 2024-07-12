import './App.css';
import CreateListing from '../components/CreateListing';
import Root from "../components/Root";
import About from '../components/About';
import Hero from '../components/Hero.js'
import FeaturedListings from '../components/FeaturedListings.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React, {useState} from 'react';

function App() {

  const [signupList, setSignupList] = useState([]);
  const [listings, setListings] = useState([])

  const addUser = (email, name, id, dateAdded) => {
    setSignupList((props) => [...props, {
      email,
      name,
      id,
      dateAdded
    }])
  }

  const addListing = (listingName, listingType, imageUrl, id) => {
    setListings((prev) => [...prev, {
      listingName,
      id,
      listingType,
      imageUrl,
      ratings: 0,
      tools: [],
      listingCity: "",
      listingState: "",
      isActive: true
    }])
  }
  
  const router = createBrowserRouter(createRoutesFromElements
    (
      <Route path="/" element={<Root />}>
        {/* AM I DOING THIS RIGHT?? */}
        <Route path="" element={<Hero signupList={signupList} addUser={addUser}/>} /> 
        <Route path="" element={<FeaturedListings listings={listings}/>} />

        <Route path="about" element={<About />} />
        <Route path="create-listing" element={<CreateListing listings={listings} addListing={addListing}/>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;