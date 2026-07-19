import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import Index from "./pages/main";
import AboutUs from "./pages/about-us";
import Journal from "./pages/journal";
import PublishWithUs from "./pages/publish-with-us";
import StyleGuide from "./pages/style-guide";
import SiteMap from "./pages/sitemap";
import SystemsEvent from "./pages/systems-event";
import NotFound from "./pages/404";
import ArticlesIndex from "./pages/articles-index";
import GDPR from "./pages/privacy";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
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

            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/index" component={Index} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/journal" component={Journal} />
                <Route exact path="/publish-with-us" component={PublishWithUs} />
                <Route exact path="/publish-with-us/style-guide" component={StyleGuide} />
                <Route exact path="/sitemap" component={SiteMap} />
                <Route exact path="/systems-event" component={SystemsEvent} />
                <Route exact path="/journal/index" component={ArticlesIndex} />
                <Route exact path="/publish-with-us/your-rights" component={GDPR} />

                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}