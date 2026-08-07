import React, { useState } from "react";
import "../styles/lowerheader.css";

export default function LowerHeader() {
    const [journalOpen, setJournalOpen] = useState(false);
    const [substackOpen, setSubstackOpen] = useState(false);
    const [publishingOpen, setPublishingOpen] = useState(false);

    return (
        <>
            <nav className="lowerheader">
                <div className="lowerheader_group">
                    <a className="lowerheader_link" href="/about-us">
                        About us
                    </a>

                    <a className="lowerheader_event lowerheader_link" href="/systems-event">
                        IMS: The Systems Experiment
                    </a>
                </div>

                <div className="dropdown" onMouseEnter={() => setJournalOpen(true)} onMouseLeave={() => setJournalOpen(false)}>
                    <button className="dropdown_trigger">
                        <a href="/pubdep" className="section_link">
                            Publishing Department ▾
                        </a>
                    </button>

                    {journalOpen && (
                        <div className="dropdown_menu">
                            <a href="/pubdep/latest-issue">Latest issue</a>

                            <a href="/pubdep/imspd-index">Articles index</a>

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
                            || Important announcement about the <mark>Systems Experiment</mark>, server to remain as SMP • <mark>New article</mark> by Harlow examines the failures of TSE • New department "IMS LABS" mentioned • IMSJ to rename as IMS Publishing Department; Constitution enacted||
                        </span>
                    </div>
                    <div className="rolling-content">
                        <span>
                            || Important announcement about the <mark>Systems Experiment</mark>, server to remain as SMP • <mark>New article</mark> by Harlow examines the failures of TSE • New department "IMS LABS" mentioned • IMSJ to rename as IMS Publishing Department; Constitution enacted||
                        </span>
                    </div>
                    <div className="rolling-content">
                        <span>
                            || Important announcement about the <mark>Systems Experiment</mark>, server to remain as SMP • <mark>New article</mark> by Harlow examines the failures of TSE • New department "IMS LABS" mentioned • IMSJ to rename as IMS Publishing Department; Constitution enacted||
                        </span>
                    </div>
                    <div className="rolling-content">
                        <span>
                            || Important announcement about the <mark>Systems Experiment</mark>, server to remain as SMP • <mark>New article</mark> by Harlow examines the failures of TSE • New department "IMS LABS" mentioned • IMSJ to rename as IMS Publishing Department; Constitution enacted||
                        </span>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
}
