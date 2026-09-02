import React from "react";
import "../styles/topheader.css";

export default function TopHeader() {
    return (
        <>
            <header className="topheader" id="header">
                <a className="topheader__logo" href="/">
                    <img
                        src="/assets/ims_banner.png"
                        alt="IMS text logo"
                        className="topheader__logo-img"
                    />
                </a>

                <div className="topheader__links">
                    <a
                        href="https://imsresearch.substack.com"
                        target="_blank"
                        className="topheader__icon"
                    >
                        <img
                            src="/assets/substack_icon.png"
                            alt="Substack logo"
                        />
                    </a>

                    <a
                        href="https://discord.gg/vHnMhwdZA3"
                        target="_blank"
                        className="topheader__icon"
                    >
                        <img
                            src="/assets/discord_icon.png"
                            alt="Discord logo"
                        />
                    </a>

                    <a
                        href="https://www.youtube.com/playlist?list=PLJmTEYXxCKpnL_hVZCVMU4OP77dU5Q6IH"
                        target="_blank"
                        className="topheader__icon"
                    >
                        <img
                            src="/assets/youtube_logo.png"
                            alt="YouTube logo"
                        />
                    </a>

                    <a
                        href="https://x.com/InstMCStudies"
                        target="_blank"
                        className="topheader__icon"
                    >
                        <img
                            src="/assets/twitter_logo.png"
                            alt="Twitter(X) logo"
                        />
                    </a>
                </div>
            </header>

            <hr/>
        </>
    );
}