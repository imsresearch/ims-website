import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/latest-issue.css";

export default function LatestIssue() {
    return (
        <div className="latest-issue-page">
            <Helmet>
                <title>Latest issue | IMS</title>
                <meta name="application-name" content="Latest issue | IMS" />
                <meta name="description" content="Read the latest issue of the IMS journal." />
            </Helmet>

            <TopHeader />

            {/* journal viewer
            https://git-rawify.vercel.app/ for raw link*/}
            <main className="journal-section">
                <div className="journal-viewer">
                    <object
                        alt="Latest issue of the IMS Journal"
                        title="Latest issue of the IMS Journal"
                        data="/database/published/journal/2/Second-Issue.pdf"
                        type="application/pdf"
                    >
                        <p style={{margin: "5vw"}}>
                            Your browser does not support PDFs. Read it using the link below.
                        </p>
                    </object>
                </div>

                <div className="journal-download">
                    <a
                        href="https://raw.githubusercontent.com/imsresearch/ims-website/main/public/database/published/journal/2/Second-Issue.pdf"
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
