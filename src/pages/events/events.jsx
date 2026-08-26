import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/events.css";

export default function Events() {
    return (
        <div className="events-page">
            <Helmet>
                <title>Events | IMS</title>
                <meta name="application-name" content="Events | IMS" />
                <meta name="description" content="Find out about future, past, and current events hosted by the IMS." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <h1>
                    IMS Events
                </h1>
            </div>

            <main className="event-content-box">
                <div id="past">
                    <h2>
                        <a href="/events/current">Current Events</a>
                    </h2>
                    <hr className="small-hr"/>
                    <h3>
                        <i>There are no current events.</i>
                    </h3>
                </div>
                <div id="past">
                    <h2>
                        <a href="/events/future">Future Events</a>
                        
                    </h2>
                    <hr className="small-hr"/>
                    <h3>
                        <i>There are no planned events.</i>
                    </h3>
                </div>
                <div id="past">
                    <h2>
                        <a href="/events/past">Past Events</a>
                    </h2>
                    <hr className="small-hr"/>
                    <h3>
                        <a href="/events/past/systems-experiment">IMS: The Systems Experiment</a>
                    </h3>
                </div>
            </main>

            <Footer />
        </div>
    );
}