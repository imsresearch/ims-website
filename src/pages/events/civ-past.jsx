import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/systems-experiment.css";

export default function TSE() {
    return (
        <div className="TSE-page">
            <Helmet>
                <title>CIV | IMS</title>
                <meta name="application-name" content="CIV | IMS" />
                <meta name="description" content="Read about the CIV event." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <h1>CIV (Co-operation, the IMS, and Ventures)</h1>
            </div>

            <main className="TSE-content-box">
                <p style={{textAlign: "center"}}>Please bare with us while be write information for this page!</p>
                <div className="return-to-events">
                    <p className="return-to-events-text">
                        <a href="/events/past">Return to the Past Events homepage</a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
