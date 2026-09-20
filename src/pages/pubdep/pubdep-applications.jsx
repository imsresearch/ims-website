import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/pubdep-applications.css";

export default function PubDepApplications() {
    return (
        <div className="pubdep-apps-page">
            <Helmet>
                <title>Publishing Department Applications | IMS</title>
                <meta name="application-name" content="Publishing Department Applications | IMS" />
                <meta name="description" content="Apply for roles in the Publishing Department of the IMS" />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <main className="pubdep-apps-section">
                <h1>IMSPD roles</h1>
                <section className="job-descriptions">
                    <div className="editor-job-description">
                        <h2>Editor</h2>
                        <div className="job-short-description">
                            <p>
                                Editors are the most important people in the department. Not only do they support authors in perfecting their article, they also need to co-ordinate between PubDep staff and reviewers.
                                <br />
                                <br />
                                Making sure deadlines are met, articles are edited smoothly and efficiently, and supporting authors is essential for as part of the department's aim of increasing the library of published works.
                            </p>
                        </div>
                        <div className="job-responsibilities">
                            <p className="job-responsibilities-title">Responsibilities</p>
                            <ul>
                                <li>Work with co-ordinators to ensure a smooth process for authors and reviewers</li>
                                <li>Set deadlines and expectations for everyone working on an article</li>
                                <li>Communicate efficiently and effectively between reviewers and authors</li>
                                <li>Edit articles according to published guides and official documentation</li>
                            </ul>
                        </div>
                        <div className="job-benefits">
                            <p className="job-benefits-title">Benefits</p>
                            <ul>
                                <li>Get to read brand-new theories and articles before anyone else</li>
                                <li>Help authors perfect articles and help the department expand the IMS library</li>
                                <li>Learn how to improve your own writing and critical reading skills</li>
                            </ul>
                        </div>
                    </div>
                    <div className="reporter-job-description">
                        <h2>Reporter</h2>
                        <div className="job-short-description">
                            <p>
                                Reporters are the cornerstone of the Press Sub-department and make sure important Minecraft Theory related news is written up and shared — not only to the IMS community — but beyond, to other IMS adjacent communities too.
                                <br />
                                <br />
                                Neutrality, truth, and journalistic standards are important things to keep in mind in this role.
                            </p>
                        </div>
                        <div className="job-responsibilities">
                            <p className="job-responsibilities-title">Responsibilities</p>
                            <ul>
                                <li>Seek out Minecraft Theory related news and write about them</li>
                                <li>Ensure a neutral tone and that facts stated are correct</li>
                                <li>Communicate with the Press Co-ordiantor (PCo) about your current work</li>
                                <li>Link news back to M(S)T to appeal to our audience</li>
                            </ul>
                        </div>
                        <div className="job-benefits">
                            <p className="job-benefits-title">Benefits</p>
                            <ul>
                                <li>Have (almost) total freedom on what you write about</li>
                                <li>Get to talk to different people form many different communities</li>
                                <li>Write about under-represented topics of your own choosing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="columnist-job-description">
                        <h2>Columnist</h2>
                        <div className="job-short-description">
                            <p>
                                Columnists are dedicated writers for the IMSPD who give their expert thoughts on MST news, current events, and other topics.
                                <br />
                                <br />
                                They are the people keeping things engaging, expanding the library of published opinion in the IMS, and allowing conversation to spark in the IMS, and communities beyond.
                            </p>
                        </div>
                        <div className="job-responsibilities">
                            <p className="job-responsibilities-title">Responsibilities</p>
                            <ul>
                                <li>Seek out Minecraft Theory related news and write about them</li>
                                <li>Be respectful, truthful, and professional</li>
                                <li>Give your opinion on controversial and intersting topics</li>
                                <li>Keep your audience engaged</li>
                            </ul>
                        </div>
                        <div className="job-benefits">
                            <p className="job-benefits-title">Benefits</p>
                            <ul>
                                <li>Have total freedom on what you write about</li>
                                <li>Can become well known in the IMS for your articles</li>
                                <li>Have your voice heard by a large audience</li>
                            </ul>
                        </div>
                    </div>
                    <div className="job-why-us">
                        <p className="job-why-us-title">Why work with the PubDep?</p>
                        <ul>
                            <li>Be a part of a growing Minecraft Theorist community</li>
                            <li>Receive the Publishing Department Staff role in the main server</li>
                            <li>Flexible working schedule - take leaves whenever needed and come back when you want to write again</li>
                        </ul>
                    </div>
                    <div className="job-apply">
                        <p className="job-apply-title">Apply</p>
                        <p>
                            <i>The IMSPD is currently trialling a "try-out" basis for hiring staff.</i>
                            <br />
                            <br />
                            Roles are open for all and there is no application process.
                            <br />
                            Simply sign up, try the role out, and continue if you enjoy the work.
                            <br />
                            <br />
                            Click here: <a href="https://discord.gg/yzfQzaqyPR">https://discord.gg/yzfQzaqyPR</a>
                        </p>
                    </div>
                    {/*<div className="pubdep-apps-viewer">
                        <iframe alt="Google Form for the IMS Publishing Department Combined Applications" src="https://docs.google.com/forms/d/e/1FAIpQLSd53n5ShQgYEF2lHBlRLZJSfqfPNKYwTrg8r2JG69JJLA_IXQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0"/>
                    </div>*/}
                </section>
            </main>

            <JournalFooter />
        </div>
    );
}
