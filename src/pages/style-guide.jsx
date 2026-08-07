import React from "react";
import { Helmet } from "react-helmet";
import { Tooltip } from "react-tooltip";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/style-guide.css";

export default function StyleGuide() {
    return (
        <div className="page">
            <Helmet>
                <title>Style guide | IMS</title>
                <meta name="application-name" content="Style guide | IMS" />
                <meta name="description" content="The style guide of the IMS Journal." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <section className="top-section">
                {/* sidebar */}
                <aside className="style-sidebar" id="sidebar">
                    <a href="#layout">Layout</a>
                    <a href="#abstract">Abstract</a>
                    <a href="#introduction">Introduction</a>
                    <a href="#body">Main text and style throughout the manuscript</a>
                    <a href="#diagrams">Diagrams (optional)</a>
                    <a href="#conclusion">Conclusion</a>
                    <a href="#references">References and acknowledgements</a>
                    <a href="#formatting">Formatting</a>
                    <a href="#ethics">Ethical considerations</a>
                    <a href="#imsc">IMSC format</a>
                </aside>

                {/*preamble*/}
                <div className="preamble-div">
                    <h1 id="main">IMS Publishing Department Style Guide</h1>

                    <p className="preamble">
                        All papers will be published according to this guide.
                        <br />
                        Manuscripts and drafts do not need to be formatted as such, but it is highly encouraged authors adhere to the guide as much as possible to ensure efficient review.
                        <br />
                        If there is any ambiguity in any of the instructions, first see examples from <a href="/pubdep">the latest journal</a>, then contact an editor or the editor-in-chief in the{" "}
                        <a href="/pubdep#contact-us">
                            IMS Publishing Department Discord server
                        </a>
                        .
                    </p>
                </div>
            </section>

            <section className="main-section">
                <main className="main-inner">
                    <h2 id="layout">
                        <span data-tooltip-id="layout-tooltip" data-tooltip-content="#layout">
                            Layout <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="layout-tooltip" />
                    <p>
                        Title
                        <br />
                        <i>The title should convey the paper’s purpose or key question in 20 words or less</i>
                        <br />
                        <br />
                        [Author(s)]
                        <br />
                        <br />
                        Abstract
                        <br />
                        Introduction
                        <br />
                        I. [Chapter 1 name]
                        <br />
                        II. [Chapter 2 name]
                        <br />
                        Results (optional)
                        <br />
                        Conclusion or implications for study
                        <br />
                        Acknowledgements or References (optional)
                    </p>
                    <br />

                    <h2 id="abstract">
                        <span data-tooltip-id="abstract-tooltip" data-tooltip-content="#abstract">
                            Abstract <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="abstract-tooltip" />
                    <ul>
                        <li>Must be 200 words or fewer</li>
                        <li>Should be in plain English and understandable by a layperson</li>
                        <li>Should summarise the paper’s key question(s) and its conclusions</li>
                        <li>Acronyms should be avoided</li>
                        <li>Any technical language should be abstracted to be easily understood</li>
                        <li>Must not contain citations, references, or quotations</li>
                    </ul>
                    <br />

                    <h2 id="introduction">
                        <span data-tooltip-id="introduction-tooltip" data-tooltip-content="#introduction">
                            Introduction <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="introduction-tooltip" />
                    <ul>
                        <li>Must explain the rationale for the paper</li>
                        <li>Must include important preceding information that the reader should be aware of</li>
                        <li>Should avoid excessive references, quotations, or statistics for ease of reading. The author may include the above where necessary.</li>
                    </ul>
                    <br />

                    <h2 id="body">
                        <span data-tooltip-id="body-tooltip" data-tooltip-content="#body">
                            Main text <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="body-tooltip" />
                    <ul>
                        <li>Authors may use American, Commonwealth, or any other formal spelling conventions</li>
                        <li>Exaggerative language such as “brilliant”, “magnificent”, “groundbreaking”, or “one-of-its-kind” should be avoided</li>
                        <li>
                            Acronyms must be defined upon first use, unless they are in the <a>official glossary</a>
                            <br />
                            <small>The glossary has not been set up yet — please ask in the Publishing Department server if you are unsure.</small>
                        </li>
                        <li>Newly introduced terms should (but do not need to) be italicised</li>
                        <li>Authors should be attentive to a reader’s ease of reading, for example by taking care of excessively long run-on sentences</li>
                        <li>
                            Footnotes must be inserted using superscripted letters of the alphabet inside square brackets, with the footnote below the margins of the page
                            <br />
                            e.g. Lorem ipsum
                            <sup>[a]</sup> dolor sit amet...
                        </li>
                        <li>Abbreviations for phrases (e.g. ASAP, N/A) should be avoided except for academic abbreviations such as e.g., i.e., and et al.</li>
                    </ul>
                    <br />

                    <h2 id="diagrams">
                        <span data-tooltip-id="diagrams-tooltip" data-tooltip-content="#diagrams">
                            Diagrams <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="diagrams-tooltip" />
                    <ul>
                        <li>Authors using any diagrams, charts, images, or visual aids should label them with numbers for easy referencing</li>
                        <ul>
                            <li>
                                e.g. (Graph)[1]
                                <br />
                                Graph 1 shows...
                            </li>
                        </ul>
                        <li>All charts must be labelled and given an appropriate scale</li>
                    </ul>
                    <br />

                    <h2 id="conclusion">
                        <span data-tooltip-id="conclusion-tooltip" data-tooltip-content="#conclusion">
                            Conclusion <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="conclusion-tooltip" />
                    <ul>
                        <li>Must answer the key questions of the paper as described in the abstract or introduction</li>
                        <li>May propose further study and research</li>
                    </ul>
                    <br />

                    <div className="references-div" id="references">
                        <h2 id="references">
                            <span data-tooltip-id="references-tooltip" data-tooltip-content="#references">
                                References <a href="#sidebar">(top)</a>
                            </span>
                        </h2>
                        <Tooltip id="references-tooltip" />
                        <b>Bibliography:</b>
                        <br />
                        <small>
                            For items inside square brackets [], authors should only include the items that are applicable. Where there is also a pipe character | separating two items, choose only
                            one.
                        </small>
                        <ul>
                            <li>
                                For manuscripts (ones posted to the <u>#draft-manuscripts</u> channel) or published works (papers officially published by the IMS Publishing Department),
                                and videos:
                            </li>
                        </ul>
                        <mark>Author name, Author 2 name. Year of publication. [“Paper title”, Journal title. | “Video name”.] [Vol. volume number.]</mark>
                        <br />
                        <div class="ref-box">
                            e.g. [1] matcha_tea. 2026. “Raid Farms: A symbol of resistance”, IMS Journal. Vol. 1
                            <br />
                            e.g. [2] Rev, Turtle. 2026. “The tyranny of the unemployed”, IMS Draft Manuscript.
                            <br />
                            <br />
                            e.g. [3] KingGame2000. 2026a. “Why Minecraft SMP Server Types DO NOT Exist (Well Kind of)”. www.youtube.com/...
                            <br />
                            e.g. [4] KingGame2000. 2026b. “Minecraft Server Theory”. www.youtube.com/...
                        </div>
                        <ul>
                            <li>For Discord messages or other online materials:</li>
                        </ul>
                        <mark>
                            Author name. Month Year of retrieval (with suffixed letter for multiple citations). [“Server title” Discord Server. | “Source title”.] <i>[First 20 words of message.]</i>{" "}
                            [Link to material | Image of message]
                        </mark>
                        <br />
                        <div class="ref-box">
                            e.g. [1] Intell. July 2026. “Raid Farms” Discord Server. <i>unironically, if i had the choice between being a 30 year old comfortable in life who doesn't have to work</i>
                            . www.discord.com/...
                            <br />
                            e.g. [2] am(amxtrnl). July 2026a. “Raid Farms” Discord Server. <i>Servers full of chuds and bums 💔</i>
                            . www.discord.com/...
                            <br />
                            e.g. [3] am(amxtrnl). July 2026b. “Raid Farms” Discord Server. <i>Biggest larp of the year</i>
                            . www.discord.com/...
                            <br />
                            e.g. [4] duck tape. December 2025. “Raid Farms” Discord Server.
                            <br />
                            (screenshot of message)
                            <br />
                            www.discord.com/...
                            <br />
                            <br />
                            e.g. [5] John Article. 2026. “Minecon 2026 is real?” www.example.com/...
                        </div>
                        <ul>
                            <li>For real-life works, e.g. academic papers:</li>
                        </ul>
                        <mark>Use the MLA citation style</mark>
                        <div class="ref-box">
                            e.g. [1] Haines, Nicolas. “Philosophy as social philosophy.” Philosophy, vol. 42, no. 159, Jan. 1967, pp. 3–52, https://doi.org/10.1017/s003181910000084x.
                        </div>
                        <br />
                        <b>Inline citations:</b>
                        <ul>
                            <li>Author-date citations:</li>
                        </ul>
                        <mark>Author name, author 2 name. Year of publication (with letter if multiple are referenced)</mark>
                        <br />
                        <div class="ref-box">
                            e.g. (matcha_tea. 2026)
                            <br />
                            e.g. (matcha_tea. 2026a, 2026b)
                            <br />
                            e.g. (Rev, Turtle. 2026)
                        </div>
                        <ul>
                            <li>Numeric citations:</li>
                        </ul>
                        <mark>[Citation number]</mark>
                        <br />
                        <div class="ref-box">
                            e.g. [1]
                            <br />
                            e.g. [2][3]
                        </div>
                        <br />
                        <ul>
                            <li>Papers are not required to have a numbered bibliography, but if numeric citations were used, all citations must be numbered</li>
                            <li>
                                For citations citing drafts in the #draft-manuscripts channel, cite the journal as <i>IMS Draft Manuscript</i>.
                            </li>
                            <li>There is no word limit to acknowledgements, however:</li>
                            <li>Acknowledgements must not be excessively long and/or irrelevant.</li>
                        </ul>
                    </div>
                    <br />

                    <h2 id="formatting">
                        <span data-tooltip-id="formatting-tooltip" data-tooltip-content="#formatting">
                            Formatting <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="formatting-tooltip" />
                    <ul>
                        <li>Papers must use the Times New Roman font for all text</li>
                        <li>Body text must be 12pt font size, and 16pt must be used for headings</li>
                        <li>All spaces and line breaks must be single-spaces and single-lines respectively</li>
                    </ul>
                    <br />

                    <h2 id="ethics">
                        <span data-tooltip-id="ethics-tooltip" data-tooltip-content="#ethics">
                            Ethics <a href="#sidebar">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="ethics-tooltip" />
                    <ul>
                        <li>Use of Artificial Intelligence (AI), Large Language Models (LLMs), or any other generative AI for writing any part of a manuscript is strictly prohibited</li>
                        <ul>
                            <li>
                                If AI or LLMs were used as part of the research methodology or in collecting data, this must be disclosed and reviewed with the editor-in-chief prior to publication
                            </li>
                        </ul>
                        <li>Plagiarism, including but not limited to claiming any text or content that is not produced or owned by the author, is strictly prohibited</li>
                        <li>
                            Personal attacks, excessive non-constructive criticism, lack of professionalism, and disrespect in any forms will be removed — if the tone of the manuscript is overly
                            negative without a cause, it may not be published
                        </li>
                        <li>Materials (e.g. images, quotations, videos) found online must be correctly referenced and used in accordance with its license</li>
                    </ul>

                    <h2 id="imsc">
                        <span data-tooltip-id="imsc-tooltip" data-tooltip-content="#imsc">
                            IMSC format <a href="#imsc">(top)</a>
                        </span>
                    </h2>
                    <Tooltip id="imsc-tooltip" />
                    <ul>
                        <li>
                            <i>Institute of Minecraft Studies Codes</i> are short codes used to reference <b>papers</b> written by Institute members
                        </li>
                        <li>The below format is for internal reference only</li>
                    </ul>
                    <img src="/assets/IMSC-format.png" class="imsc-png"></img>
                </main>
            </section>

            <JournalFooter />
        </div>
    );
}
