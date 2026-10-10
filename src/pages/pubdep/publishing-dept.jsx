import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/publishing-dept.css";

export default function PubDep() {
    return (
        <div className="journal-page">
            <Helmet>
                <title>Publishing department | IMS</title>
                <meta name="application-name" content="Publishing department | IMS" />
                <meta name="description" content="Home page for the Publishing department of the Institute of Minecraft Studies." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <h1>Institute of Minecraft Studies
                    <br/>
                    Publishing Department (IMSPD)</h1>
            </div>

            <main className="content-box">
                <div className="pubdep-intro-div">
                    <div className="pubdep-intro-img">
                        <img src="/assets/pubdep_logo.png" alt="Publishing Department logo"/>
                    </div> 
                    <p className="pubdep-introduction">
                        <i>
                            Welcome to the IMS' first and oldest department!
                            <br/>
                            We are a pillar of the academic wing of the IMS and help writers in the community refine and publish their work on Minecraft Theory.
                            <br/>
                            <br/>
                            From server political theory to practical guides to recounts of your experience on a server, we welcome and publish a wide spectrum of topics.
                            <br/>
                            As the only official publishing house of the IMS, only we can put the IMS name behind your work.
                        </i>
                    </p>
                </div>
                <div className="pubdep-news" id="news">
                    <div className="pubdep-news-item">
                        <mark className="pubdep-news-press">[Press]</mark>
                        <h2>IMS Week of Journalism: Reporting What Matters</h2>
                        <p>The IMS Week of Journalism (WoJ) will be one week, from Monday to Sunday, where a news story, opinion article, interview, or other works relevant to the Sub-Department are published in a row.
                            <br/>
                            <br/>
                            This will drive discussion and debate between members, allow for more work created by the IMS to be shared to other communities, and grow the library of the IMS.
                            <br/>
                            <br/>
                            Read more in the WoJ Sub-Department strategy brief <a href="database/non-published/pubdep/IMS-Week-of-Journalism.pdf">here</a>.
                            <br/>
                            <small>Feel free to <a href="#contact-us">contact the PCo</a> for any questions.</small>
                            <small><time dateTime="2026-10-02" title="2026-10-02">02 October</time></small>
                        </p>
                    </div>
                    <div className="pubdep-news-item">
                        <mark className="pubdep-news-journal">[Journal]</mark>
                        <h2>Second issue work in progress</h2>
                        <p>The second issue of the IMS Journal, lead by the JCo, is continuing its editorial process.
                            <br/>
                            A designed cover will feature on this issue, together with a broader server and TSE theme.
                            <br/>
                            <br/>
                            Details will be announced once all articles have finished editing and the journal is finalised.
                            <small><time dateTime="2026-10-02" title="2026-10-02">02 October</time></small>
                        </p>
                    </div>
                </div>
                <div className="pages-box" id="pages">
                    <h2>Pages</h2>
                    <hr className="small-hr" />
                    <h3>
                        <a href="/pubdep/latest-issue">Latest issue</a> • /pubdep/latest-issue
                    </h3>
                    <p>Read and download the latest issue of the IMS Journal</p>
                    <h3>
                        <a href="/pubdep/imspd-index">Articles Index</a> • /pubdep/imspd-index
                    </h3>
                    <p>Use the official IMSPD Index to find articles for research or reading</p>
                    <h3>
                        <a href="/pubdep/apply">Apply for a position</a> • /pubdep/apply
                    </h3>
                    <p>The IMSPD is currently trialling a "try-out" basis for hiring staff - sign up and try it out!</p>
                    <hr className="small-hr" />
                    <h3>
                        <a href="/publish-with-us">Publish with us</a> • /publish-with-us
                    </h3>
                    <p>Guidance for authors on how to publish with the IMSPD</p>
                    <h3>
                        <a href="/publish-with-us/style-guide">Style guide</a> • /publish-with-us/style-guide
                    </h3>
                    <p>The official style guide used by IMSPD editors and reviewers</p>
                    <h3>
                        <a href="/publish-with-us/your-rights">Your rights as an author</a> • /publish-with-us/your-rights
                    </h3>
                    <p>Read the author's rights to privacy when publishing with the IMSPD</p>
                    <hr className="small-hr" />
                    <h3>
                        <a href="/pubdep/editor-checklist">Editor guide checklist</a> • /pubdep/editor-checklist
                    </h3>
                    <p>A checklist guide for editors while working</p>
                    <h3>
                        <a href="/pubdep/table-of-articles">Table of articles</a> • /pubdep/table-of-articles
                    </h3>
                    <p>A table of all published articles</p>
                </div>

                <hr className="big-hr" />

                <div className="socials-box" id="socials">
                    <h2>Social medias</h2>
                    <hr className="small-hr" />
                    <h3>
                        <a href="https://imsresearch.substack.com">Substack</a> • imsresearch.substack.com
                    </h3>
                    <small>The IMSPD does not have any other social media accounts</small>
                </div>

                <hr className="big-hr" />

                <div className="contact-box" id="contact-us">
                    <h2>Contact us</h2>
                    <hr className="small-hr" />
                    <h3>Editor-in-chief:</h3>
                    <p>matcha._.tea • 687195193854001179</p>
                    <h3>Journal Co-ordinator:</h3>
                    <p>koviubi1 • 510548663496474660</p>
                    <h3>Press Co-ordinator:</h3>
                    <p>matcha._.tea • 687195193854001179</p>
                    <small>Usernames via Discord. Up to date as of August 2026</small>

                    <h3>Publishing Department Discord:</h3>
                    <p>
                        <a href="https://discord.gg/yzfQzaqyPR">IMSPD Discord Server</a> • yzfQzaqyPR
                    </p>
                    <small>Discord server</small>
                </div>

                <hr className="big-hr" />

                <div className="policies" id="policies">
                    <h2>Constitution, policies, and other official documents</h2>
                    <hr className="small-hr" />
                    <h3>Constitution</h3>
                    <p>
                        <a href="/database/non-published/pubdep/Constitution of the IMSPD.pdf">Download here</a>
                    </p>

                    <hr className="small-hr" />

                    <h3>Policies</h3>
                    <p>
                        <a href="/database/non-published/pubdep/ethics.pdf">Ethics Policy</a>
                    </p>
                    <p>
                        <a href="/database/non-published/pubdep/inter-departmental.pdf">Inter-departmental Relations Policy</a>
                    </p>
                    <p>
                        <a href="/database/non-published/pubdep/publishing.pdf">Publishing Policy</a>
                    </p>
                    <p>
                        <a href="/database/non-published/pubdep/staff-activity.pdf">Staff Activity Requirements Policy</a>
                    </p>
                    <p>
                        <a href="/database/non-published/pubdep/staff-hiring.pdf">Staff Hiring Policy</a>
                    </p>

                    <hr className="small-hr" />

                    <h3>Transparency reports</h3>
                    <p>
                        <a href="/public/database/non-published/pubdep/transparency-reports/transparency-report-september26.pdf">September 2026</a>
                    </p>
                    <p>
                        <a href="/public/database/non-published/pubdep/transparency-reports/transparency-report-august26.pdf">August 2026</a>
                    </p>
                    <p>
                        <a href="/public/database/non-published/pubdep/transparency-reports/transparency-report-july26.pdf">July 2026</a>
                    </p>
                    <p>
                        <a href="/public/database/non-published/pubdep/transparency-reports/transparency-report-june26.pdf">June 2026</a>
                    </p>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}
