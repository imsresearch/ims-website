import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

if (window.location.href == "https://imsresearch.github.io/") {
    document.getElementById("root").innerHTML = '<div style="text-align: centre;"><h1>The IMS website is now at <a href="https://imsresearch.pages.dev/">https://imsresearch.pages.dev</a>!</h1></div>';
    console.log("at github.io, showing warn")
}
else {
    console.log("not at github, running app");

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}