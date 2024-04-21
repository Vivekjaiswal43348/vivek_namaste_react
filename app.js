import React from "react";
import ReactDOM from "react-dom";

/** 
 * JSX => babel transpiles => React.createElement => React JS - Object => render(JS)
 * * important information
 * ! Deprecated method
 * ? should this method be exposed in the public api
 * @param the method parameters
 *  */

const jsxHeading = <h1>I am JSX H1 type heading element</h1>;
const Heading = () =>{
    return (
        <h1>
            Namste React fuctional component!!
            {jsxHeading}
        </h1>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
