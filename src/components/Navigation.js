import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice"
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  return (
    <>
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/create-listing">Create Listing</NavLink>
        {/* {
          currentUser.username
            ? <>
              <NavLink href="/profile">Profile</NavLink>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </>
            : <a href="/sign-up">Sign Up</a>
        } */}
      </div>
    </>
  )
}
