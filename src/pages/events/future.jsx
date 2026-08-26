import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/events.css";

export default function FutureEvent() {
    return (
        <div className="events-page">
            <Helmet>
                <title>➡️Future events | IMS</title>
                <meta name="application-name" content="Events | IMS" />
                <meta name="description" content="Find out about future events planned by the IMS." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <img src="/assets/MC_arrow.png" className="events-future-arrow"/>
                <h1>Planned IMS Events</h1>
            </div>

            <main className="event-content-box">
                <div className="events-intro">
                    <p>
                        After being discussed in the <a href="https://discord.gg/vHnMhwdZA3">IMS Discord server</a> by members and staff, the IMS decides on all the details of the events it will host
                        in the near future.
                        <br />
                        The planning, discussion, deliberation, and decision making will all be announced in the IMS Discord server, however this page will also be regularly updated for any new
                        information about an upcoming event.
                    </p>
                </div>
                <div className="past-events" id="past">
                    <hr className="big-hr" />
                    <h3>
                        <i>
                            There are no planned events.
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
