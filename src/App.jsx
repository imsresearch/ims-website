import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import Index from "./pages/main.jsx";
import AboutUs from "./pages/about-us.jsx";

import PubDep from "./pages/pubdep/publishing-dept.jsx";
import LatestIssue from "./pages/pubdep/latest-issue.jsx";
import PublishWithUs from "./pages/pubdep/publish-with-us.jsx";
import StyleGuide from "./pages/pubdep/style-guide.jsx";
import PubDepApplications from "./pages/pubdep/pubdep-applications.jsx";
import ArticlesIndex from "./pages/pubdep/articles-index.jsx";
import GDPR from "./pages/pubdep/privacy.jsx";

import EditorChecklist from "./pages/pubdep/editor-checklist.jsx";
import TableOfArticles from "./pages/pubdep/table-of-articles.jsx";

import Events from "./pages/events/events.jsx";
import CurrentEvent from "./pages/events/current.jsx";
import PastEvent from "./pages/events/past.jsx";
import FutureEvent from "./pages/events/future.jsx";
import TSE from "./pages/events/systems-experiment.jsx";

import NotFound from "./pages/404.jsx";

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

function ImscRedirect() {
    const {imsc} = useParams();

    useEffect (() => {
        if (imsc[0] === "j"){
            const editionN = imsc[2]
            window.location.href = `/database/published/journal/${editionN}/${imsc}/${imsc}.pdf`
        }
        else if (imsc[0] === "s" || imsc[0] === "c") {
            window.location.href = `/database/published/substack/${imsc}/${imsc}.pdf`
        }
        else {
            window.location.href = "/404"
        }

        window.history.pushState({}, "", `/${imsc}`)
    }, [imsc]);

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

                <Route exact path="/pubdep/editor-checklist" component={EditorChecklist}/>
                <Route exact path="/pubdep/table-of-articles" component={TableOfArticles}/>

                <Route exact path="/publish-with-us" component={PublishWithUs}/>
                <Route exact path="/publish-with-us/style-guide" component={StyleGuide}/>
                <Route exact path="/publish-with-us/your-rights" component={GDPR}/>

                <Route exact path="/events" component={Events}/>

                <Route exact path="/events/current" component={CurrentEvent}/>
                <Route exact path="/events/future" component={FutureEvent}/>
                <Route exact path="/events/past" component={PastEvent}/>

                <Route exact path="/events/past/systems-experiment" component={TSE}/>

                <Route exact path="/404" component={NotFound}/>

                <Route path="/:imsc" component={ImscRedirect}/>

                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}