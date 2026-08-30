import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/editor-checklist.css";

export default function CurrentEvent() {
    return (
        <div className="events-page">
            <Helmet>
                <title>Editor guide checklist | IMS</title>
                <meta name="application-name" content="Editor guide checklist | IMS" />
                <meta name="description" content="Editor guide checklist" />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <h1>Editor guide checklist</h1>
            </div>

            <main className="editor-checklist-content-box">
                <div className="checklist-separate-box checklist-preamble">
                    <p>
                        Use this checklist <b>as you go</b> throughout your time editing the article.
                        <br />
                        The items below are listed <b>chronologically</b>, so make sure you do the items <i>above</i> before continuing.
                        <br />
                        This checklist{" "}
                        <b>
                            <u>does not save</u>
                        </b>
                        . Make note of the number checkbox you have completed.
                    </p>
                    <p className="checklist-context-box">
                        <b>Dashed</b> boxes indicate extra information or context about the checkbox <b>below</b>.
                    </p>
                    <p className="checklist-separate-box">
                        <b>Solid</b> boxes indicate a special section that requires attention on its own.
                    </p>
                </div>

                <h2>Pre-work items:</h2>
                <input type="checkbox" id="item1" />
                <label for="item1">(1) I have volunteered to edit a submission</label>

                <div className="checklist-context-box">
                    <p>
                        Conflict of interest includes any competing interest, relationship, or role that could affect your judgement.
                        <br />
                        For example, if you edit an article about a server's culture and history, your interaction within the community may be a COI, as your tone and perspective may have shifted.
                    </p>
                    <p>
                        <b>You must not edit a submission if you have a major COI.</b>
                    </p>
                </div>
                <input type="checkbox" id="item2" />

                <label for="item2">(2) I have declared any conflict of interest (COI) and contacted the relevant co-ordinator - this will be included in the "declarations" section of the article</label>

                <h2>Declaration items: (use the private channel to communicate with the author)</h2>

                <div className="checklist-context-box">
                    <p>
                        When getting consent or asking for declarations, you should ask in a non-accusative way.
                        <br />
                        For example, say "these questions are standard just for the sake of transparency."
                    </p>
                </div>

                <input type="checkbox" id="item3" />
                <label for="item3">(3) The author consented to license the article under the CC BY-NC-SA 4.0 license</label>
                <br />
                <input type="checkbox" id="item4" />
                <label for="item4">(4) The author has declared any AI usage, which will be included in the article</label>
                <br />

                <div className="checklist-separate-box">
                    <h3>If they used AI:</h3>
                    <input type="checkbox" id="item5" />
                    <label for="item5">(5) I have received chat sessions or screenshots</label>
                    <br />
                    <input type="checkbox" id="item6" />
                    <label for="item6">(6) I believe the usage is appropriate</label>
                    <br />
                    <p>
                        <b>If any of the above is not true, consult with the relevant co-ordinator.</b>
                    </p>
                </div>

                <input type="checkbox" id="item7" />
                <label for="item7">(7) The author has declared any COI and I believe it does not affect their judgement and arguments - this will be included in the "declarations" section of the article</label>
                <br />
                <p>
                    <b>If it does affect them, consult with the relevant co-ordinator.</b>
                </p>
                <input type="checkbox" id="item8" />
                <label for="item8">(8) The author has declared whether multiple people contributed to the draft, which will be included in the article</label>
                <br />
                <input type="checkbox" id="item9" />
                <label for="item9">(9) Any raw data will be included in the article</label>

                <h2>Working items:</h2>
                <input type="checkbox" id="item10" />
                <label for="item10">(10) I believe the article is not of low quality</label>
                <br />
                <input type="checkbox" id="item11" />
                <label for="item11">(11) I believe the article is not outside the scope of the Publishing Department</label>

                <div className="checklist-context-box">
                    <p>Unethical practices may include lack of permissions/consent, plagiarism, fabrication, falsification, deception, personal attacks, excessive non-constructive criticism, lack of professionalism, disrespect</p>
                </div>

                <input type="checkbox" id="item12" />
                <label for="item12">(12) I believe the article is not unethical</label>
                <br />
                <input type="checkbox" id="item13" />
                <label for="item13">(13) I believe the article is interesting</label>
                <br />
                <input type="checkbox" id="item14" />
                <label for="item14">(14) Sensitive data (if any) in the submission is handled correctly</label>
                <p>
                    <b>If any of the above is not true, consult with the relevant co-ordinator.</b>
                </p>
                <input type="checkbox" id="item15" />
                <label for="item15">
                    (15) I have pinged the relevant co-ordinator to let them know I have finished the <b>initial checks</b> phase
                </label>

                <div className="checklist-separate-box">
                    <h3>Is peer review needed?</h3>
                    <div className="checklist-context-box">
                        <p>
                            Opinion pieces, columns, and news articles are generally not peer reviewed.
                            <br />
                            It may be the case that only the factual, scientific parts of the work receive peer review.
                            <br />
                            If the identity of the author, editor, and/or reviewer needs to remain anonymous, contact the relevant co-ordinator.
                        </p>
                    </div>

                    <p>
                        I belive peer review is required → continue to next section
                        <br />I <b>do not</b> belive peer review is required → go to <b>editing items</b> section
                    </p>
                </div>

                <h2>Review items (ONLY use DMs to communicate with the reviewer):</h2>

                <div className="checklist-context-box">
                    <p>
                        You should not disclose who you contacted as a potential reviewer unless they say they do not want to remain anonymous.
                        <br />
                        <br />
                        When getting consent or asking for declarations, you should ask in a non-accusative way.
                        <br />
                        For example, say "these questions are standard just for the sake of transparency."
                    </p>
                </div>

                <input type="checkbox" id="item16" />
                <label for="item16">(16) The reviewer has declared any COI and I believe it does not affect their judgement - this will be included in the "declarations" section of the article</label>
                <p>
                    <b>If it does affect them, disregard the review and find another reviewer.</b>
                </p>
                <input type="checkbox" id="item17" />
                <label for="item17">(17) I have asked the reviewer to review the article according to the peer review guide, which I have linked and sent to them</label>

                <div className="checklist-separate-box">
                    <h3>After receiving the review:</h3>
                    <p>
                        If the reviewer has provided feedback or requested changes, continue to the next section.
                        <br />
                        If not, skip to the "editing items" section.
                    </p>
                </div>

                <input type="checkbox" id="item18" />
                <label for="item18">(18) The reviewer has declared any AI usage - this will be included in the "declarations" section of the article</label>

                <div class="checklist-separate-box">
                    <h3>If they used AI:</h3>
                    <input type="checkbox" id="item19" />
                    <label for="item19">(19) I believe the usage is appropriate</label>
                    <p>
                        <b>If the above is not true, consult with the relevant co-ordinator.</b>
                    </p>
                </div>

                <div className="checklist-context-box">
                    <p>
                        It is up to your decision what feedback you take into consideration from the peer review, and what you send for clarification to the author.
                        <br />
                        <br />
                        In some cases, you may ignore a piece of feedback and not forward this to the author. If you do this, please let the relevant co-ordinator know.
                        <br />
                        <br />
                        Please also specify an appropriate time frame for the author to respond to the review.
                        <br />
                        <br />
                        If the author disputes the feedback, consult with the reviewer and the relevant co-ordinator.
                    </p>
                </div>

                <input type="checkbox" id="item20" />
                <label for="item20">
                    (20) Send the parts of the review that are <b>not confidential to myself, the editor</b>, to the author
                </label>

                <h2>Editing items:</h2>
                <input type="checkbox" id="item21" />
                <label for="item21">(21) I have pinged the relevant co-ordinator to let them know I am now at the editing phase.</label>
                <br />
                <input type="checkbox" id="item22" />
                <label for="item22">
                    (22) I have made edits to the article using feedback from the reviewer and the <a href="/publish-with-us/style-guide">style guide</a>
                </label>
                <br />
                <input type="checkbox" id="item23" />
                <label for="item23">(23) I have communicated throughout the editing phase with the author about changes I have made to ensure it is in line with their intentions</label>
                <br />
                <input type="checkbox" id="item24" />
                <label for="item24">(24) The author has approved the edited, final version of the article</label>
                <br />
                <input type="checkbox" id="item25" />
                <label for="item25">(25) I have pinged the relevant co-ordinator with the final version, saying that the article is ready to be published.</label>

                <div className="checklist-separate-box checklist-final">
                    <input type="checkbox" id="item26" />
                    <label for="item26">Done!</label>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}
