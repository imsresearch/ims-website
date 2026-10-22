import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/civ.css";

export default function CIV() {
    return (
        <div className="civ-page">
            <Helmet>
                <title>CIV Event | IMS</title>
                <meta name="application-name" content="CIV Event | IMS" />
                <meta name="description" content="Read about the CIV event." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <main className="civ-content-box">
                <div className="civ-title">
                    <p className="civ-first-p">This event is called...</p>
                    <p>C I V!</p>
                    <h2 className="civ-q">Why is the event called CIV?</h2>
                    <p>
                        <small>Keep scrolling!</small>
                    </p>
                </div>

                <div className="civ-description">
                    <span>
                        <p className="civ-initial">C:</p>
                        <img src="/assets/MC_arrow.png" className="civ-arrow" />
                        <p>
                            Build a <u>c</u>iv
                        </p>
                    </span>
                    <span>
                        <p className="civ-initial">I:</p>
                        <img src="/assets/MC_arrow.png" className="civ-arrow" />
                        <p>
                            Make friends in the <u>I</u>MS
                        </p>
                    </span>

                    <span>
                        <p className="civ-initial">V:</p>
                        <img src="/assets/MC_arrow.png" className="civ-arrow" />
                        <p>
                            <u>V</u>enture out in the world!
                        </p>
                    </span>
                </div>

                <div className="civ-features">
                    <ul>
                        <li>
                            <mark>Complete missions</mark> towards building a civ
                        </li>
                        <li>
                            Build, decorate, and <mark>simulate a real civilisation</mark>
                        </li>
                        <li>
                            <mark>Plan</mark> your civ in-between sessions
                        </li>
                        <li>
                            Participate in an <mark>investigation</mark>
                        </li>
                        <li>
                            <mark>No application</mark>, just sign up!
                        </li>

                        <br />

                        <li>
                            The <mark>event document</mark> for organisers is avilable <a href="/assets/CIV-event-document.pdf">here</a>
                        </li>
                    </ul>
                </div>

                <div className="civ-joining">
                    <p>
                        Join the server <a href="https://discord.gg/vHnMhwdZA3">here</a>
                        <br />
                        Sign up message <a href="https://discord.com/channels/1461415682586574850/1477119527203377182/1545861614555758773">here</a>
                        <br />
                        <small>We hope we see you there!</small>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
