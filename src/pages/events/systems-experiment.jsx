import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import Footer from "../../components/Footer";

import "../../styles/systems-experiment.css";

export default function TSE() {
    return (
        <div className="TSE-page">
            <Helmet>
                <title>The Systems Experiment | IMS</title>
                <meta name="application-name" content="The Systems Experiment | IMS" />
                <meta name="description" content="Read about IMS: The Systems Experiment." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="title-box">
                <h1>IMS: The Systems Experiment</h1>
            </div>

            <main className="TSE-content-box">
                <div className="TSE-grid">
                    <div className="TSE-description">
                        <p>
                            IMS: The Systems Experiment was the first IMS event to be hosted in the history of the organisation. It was planned to run from July to August, but due to low participation
                            and decreasing morale, was ended at the end of July. Two teams, orginally named Alpha and Beta (renamed by its members to Ordonia) would compete against each other to
                            create the best systems.
                        </p>
                        <p>The purpose of the experiment was to "take interesting theoretical system ideas and use them in highly active and competitive Minecraft gameplay".</p>
                        <p>
                            The experiment aimed to "combine the benefits" of "traditional civilization experiment[s]" and "SMPs like Hermitcraft [which] offer high trust and intellect system
                            building". Turtle, the event's manager, disliked that winner of traditional SMP events were those with the best military, and thus wanted the goal of IMS: TSE to be to
                            create "a group of carefully created impactful, stable, and innovative systems working together for a well functioning team".{" "}
                            <small>
                                Turtle2770. July 2026. "Handbook: IMS Systems Event".{" "}
                                <a href="https://docs.google.com/document/d/1-WgaVhwVaEWqpg6LddzPUTV2BaAbW-wqNwxGgni5UNI/edit?usp=sharing">
                                    https://docs.google.com/document/d/1-WgaVhwVaEWqpg6LddzPUTV2BaAbW-wqNwxGgni5UNI/edit?usp=sharing
                                </a>
                            </small>
                        </p>
                        <p>
                            Per the "Full Manual: IMS Systems Event" by the event's organiser, there was meant to be an "unannounced stress phase" near the end of the experiment to test the structural
                            integrity and strength of the two teams' systems. However, due to the experiment being cut short, this did not happen.{" "}
                            <small>
                                Turtle2770. July 2026. "Full Manual: IMS Systems Event".{" "}
                                <a href="https://docs.google.com/document/d/18KUAgjcDkQVlGLTT9_TZik-zs9RWcLk-aU-NYupP49g/edit?usp=sharing">
                                    https://docs.google.com/document/d/18KUAgjcDkQVlGLTT9_TZik-zs9RWcLk-aU-NYupP49g/edit?usp=sharing
                                </a>
                            </small>
                        </p>
                        <hr className="big-hr" />
                        <p>
                            Read the <a href="https://docs.google.com/document/d/18KUAgjcDkQVlGLTT9_TZik-zs9RWcLk-aU-NYupP49g/edit?usp=sharing">Full Manual</a> and the{" "}
                            <a href="https://docs.google.com/document/d/1-WgaVhwVaEWqpg6LddzPUTV2BaAbW-wqNwxGgni5UNI/edit?usp=sharing">Staff Handbook</a> to learn more.
                        </p>
                        <p>
                            Also join the <a href="https://discord.gg/mjdy4uH5xB">archived Discord server</a> for more insight.
                        </p>
                    </div>
                    <div className="TSE-media">
                        <a href="https://www.reddit.com/r/MinecraftServer/s/X5Np3hrzof">
                            <img src="/assets/IMS_The_Systems_Event_Flyer.png"></img>
                        </a>
                        <a href="https://www.reddit.com/r/MinecraftServer/s/X5Np3hrzof">
                            <img src="https://preview.redd.it/institute-of-minecraft-studies-the-systems-event-java-1-21-v0-a4t6b9jzf89h1.png?width=1080&crop=smart&auto=webp&s=85e484af9b908c9b9fc908657e7a34d0bc54b0b9"></img>
                        </a>
                    </div>
                </div>
                <div className="TSE-lower-media">
                    <a href="https://imsresearch.substack.com/p/two-teams-two-theories-of-power">
                        <img src="https://imsresearch.substack.com/api/v1/press_kit/asset/201377632/solid/composed?aspectRatio=grid&mode=light"></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=PY9uaRYYRtg">
                        <video autoPlay muted loop src="/assets/TSE_shorts_ad.mp4"></video>
                    </a>
                    <a href="https://imsresearch.substack.com/p/the-consequences-of-poor-design-a">
                        <img src="https://imsresearch.substack.com/api/v1/press_kit/asset/207800476/solid/composed?aspectRatio=grid&mode=light"></img>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
