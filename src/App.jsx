import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import Index from "./pages/main.jsx";
import AboutUs from "./pages/about-us.jsx";
import PubDep from "./pages/publishing-dept.jsx";
import LatestIssue from "./pages/latest-issue.jsx";
import PublishWithUs from "./pages/publish-with-us.jsx";
import StyleGuide from "./pages/style-guide.jsx";
import SystemsEvent from "./pages/systems-event.jsx";
import NotFound from "./pages/404.jsx";
import ArticlesIndex from "./pages/articles-index.jsx";
import GDPR from "./pages/privacy.jsx";
import PubDepApplications from "./pages/pubdep-applications.jsx";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "DejaVu Sans", sans-serif;
    }
`;

function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.slice(1);

        const interval = setInterval(() => {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView();
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [hash]);

    return null;
}

function Debug() {
    const location = useLocation();

    console.log(location.pathname);

    return null;
}

export default function App() {

    const redirect = sessionStorage.getItem("redirect");

    if (redirect) {
        sessionStorage.removeItem("redirect");
        window.history.replaceState(null, "", redirect);
    }

    return (
        <Router>
            <GlobalStyles />
            <ScrollToHash />
            <Debug />

            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/about-us" component={AboutUs}/>
                <Route exact path="/pubdep" component={PubDep}/>

                <Route exact path="/pubdep/latest-issue" component={LatestIssue}/>
                <Route exact path="/pubdep/imspd-index" component={ArticlesIndex}/>
                <Route exact path="/pubdep/applications" component={PubDepApplications}/>

                <Route exact path="/publish-with-us" component={PublishWithUs}/>
                <Route exact path="/publish-with-us/style-guide" component={StyleGuide}/>
                <Route exact path="/publish-with-us/your-rights" component={GDPR}/>

                <Route exact path="/systems-event" component={SystemsEvent}/>

                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}