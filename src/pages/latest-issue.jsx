import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/latest-issue.css";

export default function LatestIssue() {
    return (
        <div className="latest-issue-page">
            <Helmet>
                <head>
                    <title>Latest Issue | IMS</title>
                    <meta name="application-name" content="Latest issue | IMS" />
                    <meta name="description" content="Read the latest issue of the IMS journal." />

                    <meta property="og:title" content="Latest issue | IMS" />
                    <meta property="og:description" content=
                        "Read the latest issue of the IMS journal."
                    />
                </head>
            </Helmet>

            <TopHeader />
            <LowerHeader />

            {/* journal viewer */}
            <main className="journal-section">
                <div className="journal-viewer">
                    <iframe title="Latest issue of the IMS Journal" src="/database/published/journal/first-edition/First-Edition.pdf" />
                </div>

                <div className="journal-download">
                    <a
                        href="https://raw.githubusercontent.com/imsresearch/imsresearch.github.io/a0a684c439dff7cb95b43c168883b250527722c8/public/database/published/journal/first-edition/First-Edition.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download and read the latest issue here
                    </a>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}
