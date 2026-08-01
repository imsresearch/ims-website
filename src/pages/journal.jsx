import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/journal.css";

export default function Journal() {
    return (
        <div className="journal-page">
            <Helmet>
                <title>Journal department | IMS</title>
                <meta name="application-name" content="Journal department | IMS" />
                <meta name="description" content="Home page for the Journal department of the Institute of Minecraft Studies." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <h1>
                    Institute of Minecraft Studies Journal (IMSJ)
                </h1>
            </div>

            <main className="content-box">
                <div className="pages-box">
                    <h2>
                        Pages
                    </h2>
                    <hr className="small-hr"/>
                    <h3>
                        <a href="/journal/latest-issue">Latest issue</a> • /journal/latest-issue
                    </h3>
                    <p>
                        Read and download the latest issue of the IMS Journal
                    </p>
                    <h3>
                        <a href="/journal/imsj-index">Articles Index</a> • /journal/imsj-index
                    </h3>
                    <p>
                        Use the official IMSJ Index to find articles for research or reading
                    </p>
                    <hr className="small-hr"/>
                    <h3>
                        <a href="/publish-with-us">Publish with us</a> • /publish-with-us
                    </h3>
                    <p>
                        Guidance for authors on how to publish with the IMSJ
                    </p>
                    <h3>
                        <a href="/publish-with-us/style-guide">Style guide</a> • /publish-with-us/style-guide
                    </h3>
                    <p>
                        The official style guide used by IMSJ editors and reviewers
                    </p>
                    <h3>
                        <a href="/publish-with-us/your-rights">Your rights as an author</a> • /publish-with-us/your-rights
                    </h3>
                    <p>
                        Read the author's rights to privacy when publishing with the IMSJ
                    </p>
                </div>

                <hr className="big-hr"/>

                <div className="socials-box">
                    <h2>
                        Social medias
                    </h2>
                    <hr className="small-hr"/>
                    <h3>
                        <a href="https://imsresearch.substack.com">Substack</a> • imsresearch.substack.com
                    </h3>
                    <small>
                        The IMSJ does not have any other social media accounts
                    </small>
                </div>

                <hr className="big-hr"/>

                <div className="contact-box">
                    <h2>
                        Contact us
                    </h2>
                    <hr className="small-hr"/>
                    <h3>
                        Editor-in-chief:
                    </h3>
                    <p>
                        matcha._.tea • 687195193854001179
                    </p>
                    <small>
                        Username via Discord
                    </small>

                    <h3>
                        Editorial Board:
                    </h3>
                    <p>
                        <a href="https://discord.gg/yzfQzaqyPR">IMSJ Discord Server</a> • yzfQzaqyPR
                    </p>
                    <small>
                        Discord server
                    </small>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}