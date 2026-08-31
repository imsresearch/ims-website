import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/table-of-articles.css";

export default function TableOfArticles() {
    return (
        <div className="table-of-articles-page">
            <Helmet>
                <title>Table of all published articles | IMS</title>
                <meta name="application-name" content="Table of all published articles | IMS" />
                <meta name="description" content="View a table of all published articles." />
            </Helmet>

            <TopHeader />

            <main>
                <h1>Table of all published articles</h1>
                <div className="table-of-articles-div">
                    <div className="table-of-articles-inner-div">
                        <table>
                            <thead className="table-of-articles-table-heading">
                                <th>Type of publication (journal, substack, column)</th>
                                <th>Issue number</th>
                                <th>Author username(s) (main author first)</th>
                                <th>Publication number (of main author)</th>
                                <th>Title</th>
                                <th className="IMSC-th">IMSC</th>
                            </thead>
                            <tr>
                                <td>journal</td>
                                <td>1</td>
                                <td>MrMillerPink</td>
                                <td>1</td>
                                <td>Fun, wins, and losses</td>
                                <td>j(1)-mk-1</td>
                            </tr>
                            <tr>
                                <td>journal</td>
                                <td>1</td>
                                <td>Rev</td>
                                <td>1</td>
                                <td>Fun in multiplayer environments</td>
                                <td>j(1)-rv-1</td>
                            </tr>
                            <tr>
                                <td>journal</td>
                                <td>1</td>
                                <td>matcha_tea</td>
                                <td>1</td>
                                <td>Raid Farms: A symbol of resistance</td>
                                <td>j(1)-ma-1</td>
                            </tr>
                            <tr>
                                <td>journal</td>
                                <td>1</td>
                                <td>Snorka</td>
                                <td>1</td>
                                <td>The Five Motivations</td>
                                <td>j(1)-sa-1</td>
                            </tr>
                            <tr>
                                <td>journal</td>
                                <td>1</td>
                                <td>Moldypizzar0ll</td>
                                <td>1</td>
                                <td>Social Priming and Server Well-Being</td>
                                <td>j(1)-ml-1</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>matcha_tea</td>
                                <td>2</td>
                                <td>Summer event announced with ongoing votes deciding server components</td>
                                <td>s-ma-2</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>matcha_tea</td>
                                <td>3</td>
                                <td>New member-created logo for the IMS announced</td>
                                <td>s-ma-3</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>matcha_tea</td>
                                <td>4</td>
                                <td>A short rant about Minecraft YouTube</td>
                                <td>s-ma-4</td>
                            </tr>
                            <tr>
                                <td>column</td>
                                <td>N.A.</td>
                                <td>Rev</td>
                                <td>2</td>
                                <td>Two Teams, Two Theories of Power</td>
                                <td>c-rv-2</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>Harlow</td>
                                <td>1</td>
                                <td>The Reactionary Nature of Popular Answers to the Two Week Phase</td>
                                <td>s-hw-1</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>miimuu</td>
                                <td>1</td>
                                <td>Anarchy Without Ruin: Minecraft Bloodlines as a Case Study in Effective Server Design</td>
                                <td>s-mu-1</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>matcha_tea</td>
                                <td>5</td>
                                <td>Flood of messages show frustrations of Raid Farms players</td>
                                <td>s-ma-5</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>Harlow</td>
                                <td>1</td>
                                <td>The Consequences of Poor Design: A Critique of the Systems Experiment</td>
                                <td>s-hw-2</td>
                            </tr>
                            <tr>
                                <td>substack</td>
                                <td>N.A.</td>
                                <td>Turtle2770</td>
                                <td>1</td>
                                <td>The Arena vs. The Idea</td>
                                <td>s-te-1</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}
