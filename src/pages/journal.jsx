import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import JournalFooter from "../components/JournalFooter";

import "../styles/journal.css";

export default function Journal() {
  return (
    <div className="journal-page">

      <Helmet>
        <title>IMS - Latest issue</title>
        <meta name="application-name" content="Institute of Minecraft Studies (IMS) Website" />
        <meta name="author" content="matcha_tea" />
        <meta name="description" content="IMS - The home of Minecraft Theories" />
        <meta name="keywords" content="IMS, Institute of Minecraft Studies, Minecraft theory, MST, MT, Minecraft Server Theory, Minecraft Theory, Theory Events" />
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
      </Helmet>

      <TopHeader />
      <LowerHeader />

      {/* journal viewer */}
      <section className="journal-section">
        <div className="journal-viewer">
            <iframe title="Current Edition Journal" src="https://docs.google.com/gview?embedded=true&amp;url=https://raw.githubusercontent.com/imsresearch/imsresearch.github.io/main/database/published/journal/first-edition/First-Edition.pdf"/>
        </div>

        <div className="journal-download">
          <a
            href="https://raw.githubusercontent.com/imsresearch/imsresearch.github.io/main/assets/First-Edition_FINAL.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download here
          </a>
        </div>
      </section>

      <JournalFooter />
    </div>
  );
}