import React from "react";
import "../pages/Home.css";
import Search from "../components/Search";
import "./Carousel.css";

function Carousel() {
    return (

        <div>
            <div className="titleContent col-md-12">
                <h1 className="street">GREEN STREET</h1>
                <h5 className="tagline">A Front Yard Market Revolution</h5>
                <Search />
            </div>
        </div>

    )
}

export default Carousel;




