import React, { useState } from "react";
import "../styles/lowerheader.css";

export default function LowerHeader() {
    const [journalOpen, setJournalOpen] = useState(false);
    const [substackOpen, setSubstackOpen] = useState(false);
    const [publishingOpen, setPublishingOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);

    return (
        <>
            <nav className="lowerheader">
                <a className="lowerheader_link" href="/about-us">
                    About us
                </a>

                <div className="dropdown" onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
                    <button className="dropdown_trigger">
                        <a href="/events" className="section_link">
                            Events ▾
                        </a>
                    </button>

                    {eventsOpen && (
                        <div className="dropdown_menu">
                            <a href="/events">Home</a>
                            <hr className="dropdown-hr" />
                            <a href="/events/current">Current events</a>

                            <a href="/events/future">Future events</a>

                            <a href="/events/past">Past events</a>
                        </div>
                    )}
                </div>

                <div className="dropdown" onMouseEnter={() => setJournalOpen(true)} onMouseLeave={() => setJournalOpen(false)}>
                    <button className="dropdown_trigger">
                        <a href="/pubdep" className="section_link">
                            Publishing Department ▾
                        </a>
                    </button>

                    {journalOpen && (
                        <div className="dropdown_menu">
                            <a href="/pubdep">Home</a>

                            <hr className="dropdown-hr" />

                            <a href="/pubdep/latest-issue">Latest issue</a>

                            <a href="/pubdep/imspd-index">Articles index</a>

                            <a href="/pubdep/applications">Apply for a job</a>

                            <hr className="dropdown-hr" />

                            <div className="dropdown" onMouseEnter={() => setPublishingOpen(true)} onMouseLeave={() => setPublishingOpen(false)}>
                                <button className="dropdown_trigger dropdown_trigger_small">Publishing ▾</button>

                                {publishingOpen && (
                                    <div className="dropdown_menu">
                                        <a href="/publish-with-us">Publish with us</a>

                                        <a href="/publish-with-us/style-guide">Style guide</a>

                                        <a href="/publish-with-us/your-rights">Privacy for authors</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="dropdown" onMouseEnter={() => setSubstackOpen(true)} onMouseLeave={() => setSubstackOpen(false)}>
                    <button className="dropdown_trigger">
                        <a href="https://imsresearch.substack.com/" className="section_link">
                            Substack ▾
                        </a>
                    </button>

                    <img className="lowerheader_external-img" src="/assets/external_icon.png" alt="" />

                    {substackOpen && (
                        <div className="dropdown_menu">
                            <a href="https://imsresearch.substack.com/s/news">News</a>

                            <a href="https://imsresearch.substack.com/s/theoryessay">Theories/Essays</a>

                            <a href="https://imsresearch.substack.com/s/opinion">Opinion</a>
                        </div>
                    )}
                </div>
            </nav>
            <div className="rolling">
                <div className="rolling-container">
                    <div className="rolling-content">
                        <span>
                            || New{" "}
                            <mark>
                                <a href="/events">events hub</a>
                            </mark>{" "}
                            created for current, past, and future events. •{" "}
                            <mark>
                                <a href="https://imsresearch.substack.com/p/the-arena-vs-the-idea">New opinion</a>
                            </mark>{" "}
                            article by Turtle discusses the toxic nature of "overly gamified" communities • IMSJ to rename as{" "}
                            <mark>
                                <a href="/pubdep">IMS Publishing Department</a>
                            </mark>
                            ; Constitution enacted &nbsp;
                        </span>
                        <span>
                            || New{" "}
                            <mark>
                                <a href="/events">events hub</a>
                            </mark>{" "}
                            created for current, past, and future events. •{" "}
                            <mark>
                                <a href="https://imsresearch.substack.com/p/the-arena-vs-the-idea">New opinion</a>
                            </mark>{" "}
                            article by Turtle discusses the toxic nature of "overly gamified" communities • IMSJ to rename as{" "}
                            <mark>
                                <a href="/pubdep">IMS Publishing Department</a>
                            </mark>
                            ; Constitution enacted &nbsp;
                        </span>
                        <span>
                            || New{" "}
                            <mark>
                                <a href="/events">events hub</a>
                            </mark>{" "}
                            created for current, past, and future events. •{" "}
                            <mark>
                                <a href="https://imsresearch.substack.com/p/the-arena-vs-the-idea">New opinion</a>
                            </mark>{" "}
                            article by Turtle discusses the toxic nature of "overly gamified" communities • IMSJ to rename as{" "}
                            <mark>
                                <a href="/pubdep">IMS Publishing Department</a>
                            </mark>
                            ; Constitution enacted &nbsp;
                        </span>
                        <span>
                            || New{" "}
                            <mark>
                                <a href="/events">events hub</a>
                            </mark>{" "}
                            created for current, past, and future events. •{" "}
                            <mark>
                                <a href="https://imsresearch.substack.com/p/the-arena-vs-the-idea">New opinion</a>
                            </mark>{" "}
                            article by Turtle discusses the toxic nature of "overly gamified" communities • IMSJ to rename as{" "}
                            <mark>
                                <a href="/pubdep">IMS Publishing Department</a>
                            </mark>
                            ; Constitution enacted &nbsp;
                        </span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
