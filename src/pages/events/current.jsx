import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/events.css";

export default function CurrentEvent() {
    return (
        <div className="events-page">
            <Helmet>
                <title>🔴Current events | IMS</title>
                <meta name="application-name" content="Current events | IMS" />
                <meta name="description" content="Find out about the current events the IMS is hosting." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <img src="/assets/MC_redstone_lamp.webp" className="events-current-arrow"/>
                <h1>Current IMS Events</h1>
            </div>

            <main className="event-content-box">
                <div className="events-intro">
                    <p>
                        The IMS regularly hosts events, experiments, and other in-game activities. These events are announced in the <a href="https://discord.gg/vHnMhwdZA3">IMS Discord server</a> and
                        details are first to be posted there.
                        <br />
                        This page will regularly upate with every event that the IMS hosts, with information about how to participate, what it's about, and when it starts/ends.
                    </p>
                </div>
                <div className="past-events" id="past">
                    <hr className="big-hr" />
                    <h3>
                        <i>
                            There are no current events.
                            <br />
                            <small>Up to date as of 26 August 2026 - information is first released on the IMS Discord server.</small>
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
