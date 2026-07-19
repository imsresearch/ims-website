import React from "react";
import "../styles/topheader.css";

export default function TopHeader() {
    return (
        <>
            <header className="topheader" id="header">
                <a className="topheader__logo" href="/">
                    <img
                        src="/assets/ims_banner.png"
                        alt="IMS Logo"
                        className="topheader__logo-img"
                    />
                </a>

                <div className="topheader__links">
                    <a
                        href="https://imsresearch.substack.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/assets/substack_icon.png"
                            alt="Substack"
                            className="topheader__icon"
                        />
                    </a>

                    <a
                        href="https://discord.gg/vHnMhwdZA3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/assets/discord_icon.png"
                            alt="Discord"
                            className="topheader__icon"
                        />
                    </a>

                    <a
                        href="https://www.youtube.com/playlist?list=PLJmTEYXxCKpnL_hVZCVMU4OP77dU5Q6IH"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/assets/youtube_icon.png"
                            alt="YouTube"
                            className="topheader__icon"
                        />
                    </a>
                </div>
            </header>

            <div className="divider">
                <hr />
            </div>
        </>
    );
}