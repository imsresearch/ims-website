import { Helmet } from "react-helmet";
import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

import "../styles/systems-event.css"

export default function SystemsEvent() {
    const hexagons = [
        ["Two teams", "#2E7D32", "#E8F5E9"],
        ["Make systems", "#E0B76A", "#2B1D0E"],
        ["Interact", "#CFE8FF", "#0B1B2B"],
        ["Theorise", "#6C3EC1", "#F3E8FF"],
    ];

    return (
        <>
            <Helmet>
                <title>IMS - The Systems Event</title>

                <meta
                    name="application-name"
                    content="Institute of Minecraft Studies (IMS) Website"
                />
                <meta
                    name="author"
                    content="Institute of Minecraft Studies"
                />
                <meta
                    name="description"
                    content="IMS - The home of Minecraft Theories"
                />
                <meta
                    name="keywords"
                    content="IMS, Minecraft theory, MST, MT, Minecraft Server Theory"
                />
                <link
                    rel="shortcut icon"
                    href="/assets/favicon.png"
                />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <section className="systems-title">
                <div className="systems-title-inner">
                    <h1>
                        IMS: The Systems Event
                        <br />
                        is open for applications to join!
                    </h1>
                </div>
            </section>

            <section className="systems-svgs">
                {hexagons.map(([text, fill, textColor]) => (
                    <svg
                        key={text}
                        viewBox="0 0 245 245"
                    >
                        <polygon
                            points="122.5,5 240,122.5 122.5,240 5,122.5"
                            fill={fill}
                            stroke="black"
                            strokeWidth="2"
                        />
                        <text
                            x="122.5"
                            y="122.5"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill={textColor}
                            className="svg-text"
                        >
                            {text}
                        </text>
                    </svg>
                ))}
            </section>

            <section className="systems-ad">
                <div className="video-box">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        controls
                    >
                        <source
                            src="/assets/TSE_shorts_ad.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <img
                    className="poster"
                    src="/assets/IMS_The_Systems_Event_Flyer.png"
                    alt="Systems Event Poster"
                />
            </section>

            <section className="features-section" />

            <section className="systems-join-section">
                <p>hover me!</p>

                <div className="join-bullet-div">
                    <img
                        className="arrow"
                        src="/assets/MC_arrow.png"
                        alt=""
                    />

                    <ul>
                        <li>
                            <a
                                className="join-server"
                                href="https://discord.gg/mjdy4uH5xB"
                            >
                                Join the Systems Event server
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="join-bullet-div">
                    <img
                        className="arrow"
                        src="/assets/MC_arrow.png"
                        alt=""
                    />

                    <ul>
                        <li>Fill in the application</li>
                        <li className="list-small">
                            Applications open until 01 July!
                        </li>
                    </ul>
                </div>

                <div className="join-bullet-div">
                    <img
                        className="arrow"
                        src="/assets/MC_arrow.png"
                        alt=""
                    />

                    <ul>
                        <li>Plan your system</li>
                    </ul>
                </div>

                <div className="join-bullet-div">
                    <img
                        className="arrow"
                        src="/assets/MC_arrow.png"
                        alt=""
                    />

                    <ul>
                        <li>Interact with other systems!</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
}