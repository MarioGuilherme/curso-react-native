import React from "react";
import Filho from "./Filho";

export default () => {
    let x = 21;
    let y = 100;

    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x + 100} b={y + 200}/>
        </>
    );
};