import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../../styles/navbar/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { derivativeInstance } from "../Contract";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import logo from "../../assets/ClimaShield_1.png";
import { AiFillHome } from "react-icons/ai";
import { FaFileContract } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { RiShieldUserFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";

function Navbar() {
  const [isOwner, setIsOwner] = useState(false);
  const { address } = useAccount();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveLink("home");
    } else if (currentPath === "/derivatives") {
      setActiveLink("derivatives");
    } else if (currentPath === "/analysis") {
      setActiveLink("analysis");
    } else if (currentPath === "/profile") {
      setActiveLink("profile");
    } else if(currentPath === "/create"){
      setActiveLink("create");
    }
    else {
      setActiveLink("");
    }
  }, [location.pathname]);

  const verifyAddr = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await derivativeInstance();
        const deployer = await con.getDeployerAddress();
        if (deployer === address) {
          setIsOwner(true);
        }
      }
    } catch (e) {
      console.log("Error in creating user account: ", e);
    }
  };

  useEffect(() => {
    verifyAddr();
  });

  return (
    <div className="navbar-component sticky-top">
      <nav
        className={`navbar navbar-expand-lg navbar-light py-2 `}
        role="navigation"
      >
        <div className="container-fluid px-4 px-md-5 navbar ">
          <a className="d-flex navbar-brand " href="/">
            {/* <h1>LOGO</h1> */}
            <img src={logo} className="img-logo" width={10} />
          </a>

          <div
            className="collapse navbar-collapse "
            id="navbarRightAlignExample"
          >
            <ul className="d-lg-flex navbar-nav align-items-center mb-2 mb-lg-0 navbar-container ">
              <li
                className={`nav-item py-1 px-lg-1 ${
                  activeLink === "home" ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center "
                  to="/"
                >
                  <span
                    className={`landing-navbar ${
                      activeLink === "home" ? "activeText" : ""
                    }`}
                  >
                    Home
                    <AiFillHome className="nav-icon" />
                  </span>
                </NavLink>
              </li>
              <li
                className={`nav-item py-1 px-lg-1 ${
                  activeLink === "derivatives" ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  to="/derivatives"
                >
                  <span
                    className={`landing-navbar ${
                      activeLink === "derivatives" ? "activeText" : ""
                    }`}
                  >
                    Derivatives
                    <FaFileContract className="nav-icon" />
                  </span>
                </NavLink>
              </li>
              <li
                className={`nav-item py-1 px-lg-1 ${
                  activeLink === "analysis" ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  to="/analysis"
                >
                  <span
                    className={`landing-navbar ${
                      activeLink === "analysis" ? "activeText" : ""
                    }`}
                  >
                    Analysis
                    <FaSearch className="nav-icon" />
                  </span>
                </NavLink>
              </li>
              <li
                className={`nav-item py-1 px-lg-1 ${
                  activeLink === "profile" ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  to="/profile"
                >
                  <span
                    className={`landing-navbar ${
                      activeLink === "profile" ? "activeText" : ""
                    }`}
                  >
                    Profile
                    <RiShieldUserFill className="nav-icon" />
                  </span>
                </NavLink>
              </li>
              <li className="nav-item py-1 px-lg-1">
                <a
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="landing-navbar">
                    Docs
                    <HiDocumentArrowUp className="nav-icon" />
                  </span>
                </a>
              </li>

              <li
                className={`nav-item py-1 px-lg-1 ${
                  activeLink === "create" ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  to="/create"
                >
                  <span
                    className={`landing-navbar ${
                      activeLink === "create" ? "activeText" : ""
                    }`}
                  >
                    Create
                    <IoIosAddCircle className="nav-icon" />
                  </span>
                </NavLink>
              </li>

              {/* {isOwner ? (
                <li className="nav-item py-1 px-lg-1 eth-item">
                  <NavLink
                    className="nav-link px-1 p-0 d-flex align-items-center"
                    to="/create"
                  >
                    <span className="landing-navbar">Create</span>
                  </NavLink>
                </li>
              ) : (
                ""
              )} */}

              {/* <li className=" py-2 px-2 eth-item">
                <ConnectButton  />
              </li> */}
            </ul>
          </div>


              <div>
              <ConnectButton  />
              </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
