import React, { useState } from "react";
import "../styles/lowerheader.css";

export default function LowerHeader() {
  const [journalOpen, setJournalOpen] = useState(false);
  const [substackOpen, setSubstackOpen] = useState(false);
  const [publishingOpen, setPublishingOpen] = useState(false);

  return (
    <nav className="lowerheader">
      <div className="lowerheader_group">
        <a className="lowerheader_link" href="/about-us">
          About us
        </a>

        <a className="lowerheader_link lowerheader_event" href="/systems-event">
          The Systems Event
        </a>
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setJournalOpen(true)}
        onMouseLeave={() => setJournalOpen(false)}
      >
        <button className="dropdown_trigger">
          Journal ▾
        </button>

        {journalOpen && (
          <div className="dropdown_menu">
            <a href="/journal">
              Latest Issue
            </a>

            <a href="/journal/imsj-index">
              Articles index
            </a>

            <div
              className="dropdown"
              onMouseEnter={() => setPublishingOpen(true)}
              onMouseLeave={() => setPublishingOpen(false)}
            >
              <button className="dropdown_trigger dropdown_trigger_small">
                Publishing ▾
              </button>

              {publishingOpen && (
                <div className="dropdown_menu">
                  <a href="/publish-with-us">
                    Publish with us
                  </a>

                  <a href="/publish-with-us/style-guide">
                    Style guide
                  </a>

                  <a href="/publish-with-us/your-rights">
                    Privacy for authors
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setSubstackOpen(true)}
        onMouseLeave={() => setSubstackOpen(false)}
      >
        <button className="dropdown_trigger">
          Substack ▾
        </button>

        <img
          className="lowerheader_external-img"
          src="/assets/external_icon.png"
          alt=""
        />

        {substackOpen && (
          <div className="dropdown_menu">
            <a href="https://imsresearch.substack.com/s/news">
              News
            </a>

            <a href="https://imsresearch.substack.com/s/theoryessay">
              Theories/Essays
            </a>

            <a href="https://imsresearch.substack.com/s/opinion">
              Opinion
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}