import React from "react";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

import "../styles/404.css";

export default function NotFound() {
    return (
        <div className="404-page">
            <TopHeader />
            <LowerHeader />

            {/* journal viewer */}
            <main className="journal-section">
                <div className="content">
                    <h1>Page not found</h1>
                    <p>The page you requested may be broken, moved, or no longer exist.</p>
                    <p>If you believe this is a mistake, contact us on <a href="https://discord.gg/vHnMhwdZA3">Discord</a> (vHnMhwdZA3)</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
