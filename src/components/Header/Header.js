import React from "react";
import "./Header.css";

// import ThemeContext from "../../contexts/ThemeContext";

function Header(props) {
  return (
    // <ThemeContext.Consumer>
    //   {themeValue => {
    //     return (
          <header className="Header__header">
            {/* <h1>{themeValue}</h1> */}
            <h1>Phone Directory App</h1>
          </header>
  //       );
  //     }}
  //   </ThemeContext.Consumer>
  );
}


export default Header;
