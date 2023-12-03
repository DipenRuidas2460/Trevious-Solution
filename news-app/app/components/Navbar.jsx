import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign up
          </li>
        </ul>
      ) : (
        <div className="container">
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
          <Link href="/">
            <a className="navbar-brand">News Reader</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/business">
                  <a className="nav-link">Business</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/entertainment">
                  <a className="nav-link">Entertainment</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/general">
                  <a className="nav-link">General</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/health">
                  <a className="nav-link">Health</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/science">
                  <a className="nav-link">Science</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sports">
                  <a className="nav-link">Sports</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/technology">
                  <a className="nav-link">Technology</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
