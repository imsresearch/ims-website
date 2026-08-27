import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/events.css";

export default function PastEvent() {
    return (
        <div className="events-page">
            <Helmet>
                <title>⬅️Past events | IMS</title>
                <meta name="application-name" content="Events | IMS" />
                <meta name="description" content="Find out about past events hosted by the IMS." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <img src="/assets/MC_arrow.png" alt="Minecraft arrow pointing left" className="events-past-arrow"/>
                <h1>Past IMS Events</h1>
            </div>

            <main className="event-content-box">
                <div className="events-intro">
                    <p>
                        Events that the IMS has hosted in the past will be documented here for the sake of learning, archiving previous work, and allowing transparency for members and other interested
                        visitors alike.
                        <br />
                        The information in the links below are written as neutrally and factually as possible by editors or reporters of the <a href="/pubdep">IMSPD</a> or IMS Admins.
                    </p>
                </div>
                <div className="past-events" id="past">
                    <hr className="big-hr" />
                    <h3>
                        <ul>
                            <li>
                                <p>
                                    <a href="/events/past/systems-experiment">IMS: The Systems Experiment</a>
                                </p>
                            </li>
                        </ul>
                        <i>
                            <small>Last updated <time dateTime="2026-08-27" title="2026-08-27">27 August, 2026</time> - information is first released on the IMS Discord server.</small>
                        </i>
                    </h3>
                </div>
                <div className="return-to-events">
                    <p>
                        <a href="/events">Return to the Events homepage</a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
