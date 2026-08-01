import React from "react";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

import "../styles/404.css";

export default function NotFound() {
    return (
        <div className="nf-page">
            <Helmet>
                <head>
                    <title>404 | IMS</title>
                    <meta name="application-name" content="404 | IMS" />
                    <meta name="description" content="404 Page not found on the Institute of Minecraft Studies website" />

                    <meta property="og:title" content="404 | IMS" />
                    <meta property="og:description" content=
                        "404 Page not found on the Institute of Minecraft Studies website"
                    />
                </head>
            </Helmet>

            <TopHeader />
            <LowerHeader />

            {/* journal viewer */}
            <main className="nf-section">
                <div className="nf-content">
                    <h1>Page not found</h1>
                    <p>The page you requested may be broken, moved, or no longer exist.</p>
                    <p>If you believe this is a mistake, contact us on <a href="https://discord.gg/vHnMhwdZA3">Discord</a> (vHnMhwdZA3)</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
