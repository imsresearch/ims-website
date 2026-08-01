import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/privacy.css";

export default function YourRights() {
    return (
        <div className="privacy-page">
            <Helmet>
                <head>
                    <title>Privacy for authors | IMS</title>
                    <meta name="application-name" content="Privacy for authors | IMS" />
                    <meta name="description" content="Information about publishing authors' privacy and rights." />

                    <meta property="og:title" content="Privacy for authors | IMS" />
                    <meta property="og:description" content=
                        "Information about publishing authors' privacy and rights."
                    />
                </head>
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <main className="privacy-section">
                <div className="privacy-container">
                    <h1>Your rights as an author publishing with the IMS</h1>

                    <p>
                        Your article will be published on this website's homepage,
                        Substack (if applicable), Journal (if applicable), be
                        placed on the GitHub repository of this website, and used
                        in the index.
                    </p>

                    <p>
                        These publications will be shared on IMS social sites, and
                        so will your work.
                    </p>

                    <p>
                        You may ask for your username and any other identifiable
                        details to be censored when publishing.
                        <br />
                        You will be asked for your consent for the above things,
                        which you may deny for whatever reason, and the journal
                        will do our best to accommodate your requests.
                    </p>

                    <p>
                        You will be asked to send the following as consent for
                        publishing:
                    </p>

                    <p className="consent">
                        <i>
                            I consent with having my work and username being
                            displayed and shared on IMS related sites, which may
                            include the website, Substack, or GitHub repository.
                        </i>
                    </p>

                    <p>
                        <a href="https://discord.gg/yzfQzaqyPR">
                            Contact us
                        </a>{" "}
                        if you have any questions by pinging or DMing the
                        @Editor-in-chief.
                    </p>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}