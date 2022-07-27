import React from "react";
import { Link } from "react-router-dom";
import { Style } from "./Style.jsx";

const LandingPage = () => {
  return (
    <Style>
        <div className="container">
        <h1 className="title">World Flags App</h1>
            <Link to="/home">
                <button className="HomeButton"> Enter </button>
            </Link>
        </div>
    </Style>
  );
};

export default LandingPage;