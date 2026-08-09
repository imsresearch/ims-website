import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/pubdep-applications.css";

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
                <div className="pubdep-apps-viewer">
                    <iframe title="Google Form for the IMS Publishing Department Combined Applications" src="https://docs.google.com/forms/d/e/1FAIpQLSd53n5ShQgYEF2lHBlRLZJSfqfPNKYwTrg8r2JG69JJLA_IXQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0"/>
                </div>
            </main>

            <JournalFooter />
        </div>
    );
}
