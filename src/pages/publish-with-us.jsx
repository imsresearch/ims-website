import React from "react";
import {Helmet} from "react-helmet";
import {Tooltip} from "react-tooltip";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/publish-with-us.css";

export default function PublishWithUs() {
    return (
        <div className="publish-page">
            <Helmet>
                <title>IMS - Publish with us</title>
                <meta
                    name="application-name"
                    content="Institute of Minecraft Studies (IMS) Website"
                />
                <meta name="author" content="matcha_tea" />
                <meta
                    name="description"
                    content="IMS - The home of Minecraft Theories"
                />
                <meta
                    name="keywords"
                    content="IMS, Institute of Minecraft Studies, Minecraft theory, MST, MT, Minecraft Server Theory"
                />
                <link rel="shortcut icon" href="/assets/favicon.png" />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <section className="publish-layout">
                {/* sidebar */}
                <aside className="publish-sidebar" id="sidebar">
                    <a href="#how-what">How and what to publish</a>
                    <a href="#style-guide">Style guide</a>
                    <a href="#where">Where you’ll see your work</a>
                </aside>

                {/* content */}
                <main className="publish-content">
                    <h1 id="main">Publishing with the IMS</h1>

                    <p>
                        The sections below will tell authors what to do in order
                        to publish with the{" "}
                        <a href="/journal">
                            <i>IMS Journal</i>
                        </a>{" "}
                        or{" "}
                        <a href="https://imsresearch.substack.com">
                            IMS Substack
                        </a>.
                        
                        <br />

                        Publishing means that your article will be indexed{" "}
                        <a href="/journal/index">here</a>.

                        <br />
                        
                        <a href="/publish-with-us/your-rights">
                            Read our privacy guide for authors.
                        </a>
                    </p>

                    <h2 id="how-what">
                        <span
                            data-tooltip-id="how-tooltip"
                            data-tooltip-content="#how-what"
                        >
                            How and what to publish <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="how-tooltip"/>

                    <p>
                        The{" "}
                        <b>
                            <i>IMS Journal</i>
                        </b>{" "}
                        and <b>IMS Substack</b> are different places where a
                        manuscript can be published. Publishing to one does not
                        exclude the same manuscript to be published in the
                        other.
                    </p>
                    <p>
                        Publishing through either medium is for any manuscript,
                        regardless of genre. The <b>IMS Substack</b> serves as a
                        space for authors to publish their work <i>outside</i>{" "}
                        of the journal selection and editing cycle.
                        <br />
                        This is the primary route for publication and propagation of authors' work.
                    </p>

                    <b>Substack:</b>
                    <ol>
                        <li>
                            <b>Before</b> starting to write, join the{" "}
                            <a href="https://discord.gg/yzfQzaqyPR">
                                <i>IMS Journal</i> Discord server
                            </a>{" "}
                            and follow the instructions in the <u>#readme</u>{" "}
                            channel
                        </li>
                        <li>Write a draft of your manuscript</li>
                        <li>Wait for the manuscript to be edited</li>
                        <li>Have your work published</li>
                    </ol>

                    <b>Journal:</b>
                    <ol style={{ marginBottom: "0" }}>
                        <li>
                            Draft your manuscript according to the requirements{" "}
                            <a href="#style-guide">here</a>
                        </li>
                        <li>
                            Join the{" "}
                            <a href="https://discord.gg/yzfQzaqyPR">
                                <i>IMS Journal</i> Discord server
                            </a>{" "}
                            and follow the instructions in the <u>#readme</u>{" "}
                            channel
                        </li>
                        <li>
                            Wait for the board to accept your manuscript. If
                            accepted,
                        </li>
                        <li>
                            Begin working with your assigned editors in the{" "}
                            <u>Feedback Area</u>
                        </li>
                        <li>Have your work published</li>
                    </ol>

                    <br />

                    <h2 id="style-guide">
                        <span
                            data-tooltip-id="style-guide-tooltip"
                            data-tooltip-content="#style-guide"
                        >
                            Style guide <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="style-guide-tooltip"/>

                    <p>
                        Read the <i>IMS Journal</i> style guide{" "}
                        <a href="/publish-with-us/style-guide">here</a>
                    </p>

                    <br />

                    <h2 id="where">
                        <span
                            data-tooltip-id="where-tooltip"
                            data-tooltip-content="#where"
                        >
                            Where you’ll see your work <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="where-tooltip"/>

                    <p>
                        If a work was written for the Substack, it will appear
                        in the{" "}
                        <a href="https://imsresearch.substack.com">Substack</a>{" "}
                        page and on the <a href="/#articles">front page</a> of
                        this website, and a promotional image will be sent to{" "}
                        <u>#media</u> in the Discord channel. Anyone may
                        redistribute this ad to promote the publication.
                        <br />
                        <br />
                        Works published to the IMS Journal can be found on the{" "}
                        <a href="https://github.com/imsresearch/ims-database">
                            IMS database
                        </a>{" "}
                        if it is not on the latest issue. If the work was
                        published on the latest issue, it will be found{" "}
                        <a href="/journal">here</a>.
                        <br />
                    </p>
                </main>
            </section>

            <JournalFooter />
        </div>
    );
}
