import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import {Body} from "./src/Body";
import { Footer } from "./src/Footer";
import "./style.css";

/*
    Planning-
    Navbar
        Logo(left)
        Home,About,ContactUs,Cart (right)
    Body
        Search Bar
        Cards
            image
            restaurant name
            cusines
            distance 
    Footer
*/
//  Things which will not work with image
//  src="logo.png"
//  src="/logo.png"
// so we can import it logo then we can use it  inside curly braces
// or directly give the path  http://...


//Config driven UI


const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
