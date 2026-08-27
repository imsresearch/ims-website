import React from "react";
import {Helmet} from "react-helmet";
import {Tooltip} from "react-tooltip";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/publish-with-us.css";

export default function PublishWithUs() {
    return (
        <div className="publish-page">
            <Helmet>
                <title>Publish with us | IMS</title>
                <meta name="application-name" content="Publish with us | IMS" />
                <meta name="description" content="Information about how to publish with the IMS Publishing Department." />
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
                        <a href="/pubdep">
                            IMS Journal
                        </a>{" "}
                        or{" "}
                        <a href="https://imsresearch.substack.com">
                            IMS Substack
                        </a>.
                        
                        <br />

                        Publishing means that your article will be indexed{" "}
                        <a href="/pubdep/imspd-index">here</a>.

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
                            IMS Journal
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

                    <b>To publish through either publication:</b>
                    <ol>
                        <li>Post your draft manuscript to the <u>#draft-manuscripts</u> channel in the <a href="https://discord.gg/vHnMhwdZA3">main IMS server</a>. This is so that institute members can see initial drafts and the development of ideas.</li>
                        <li>Ping the Journal co-ordinator (for submissions to the journal) or the Press co-ordinator (for submissions to the Substack), with your manuscript document attached (.pdf or .docx or other text formats is fine) in the <u>#manuscript-submissions</u> channel.</li>
                        <li>Begin working with your assigned editors in the Feedback Area</li>
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
                        Read the IMS Publishing Department style guide{" "}
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
                        Works published with the IMS Publishing Department can be found on the{" "}
                        <a href="https://github.com/imsresearch/ims-database">
                            IMS database
                        </a>{" "}
                        if it is not on the latest issue. If the work was
                        published on the latest issue, it will be found{" "}
                        <a href="/pubdep/latest-issue">here</a>.
                        <br />
                    </p>
                </main>
            </section>

            <JournalFooter />
        </div>
    );
}
