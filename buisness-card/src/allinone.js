import React from "react";

import Header from "./header";
import './cardealer.css';
import Main from "./maincontent";
import Fotter from "./fotter";
export default function All()
{
    return(
        <div className="all">
            <Header/>
            <Main/>
            <Fotter/>
        </div>
    )
}