import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

if (window.location.href == "https://imsresearch.github.io/") {
    document.getElementById("root").innerHTML = '<h1>The IMS website is now at <a href="https://imsresearch.pages.dev/">https://imsresearch.pages.dev</a>!</h1>';
}
else {
    document.getElementById("root").innerHTML = "<p>not at github</p>";
    console.log("not github");

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}