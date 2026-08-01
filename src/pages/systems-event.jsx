import { Helmet } from "react-helmet";
import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

import "../styles/systems-event.css";

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
                <title>IMS: The Systems Experiment | IMS</title>
                <meta name="application-name" content="Systems Experiment | IMS" />
                <meta name="description" content="The webpage for IMS: The Systems Experiment." />

                <meta property="og:title" content="Systems Experiment | IMS" />
                <meta property="og:description" content=
                    "The webpage for IMS: The Systems Experiment."
                />
            </Helmet>

            <TopHeader />
            <LowerHeader />
            <div className="systems-content">
                <section className="systems-title">
                    <div className="systems-title-inner">
                        <h1>
                            IMS: The Systems Experiment
                            <br />
                            has ended
                        </h1>
                    </div>
                </section>

                {/*<section className="systems-svgs">
                {hexagons.map(([text, fill, textColor]) => (
                    <svg key={text} viewBox="0 0 245 245">
                        <polygon points="122.5,5 240,122.5 122.5,240 5,122.5" fill={fill} stroke="black" strokeWidth="2" />
                        <text x="122.5" y="122.5" textAnchor="middle" dominantBaseline="middle" fill={textColor} className="svg-text">
                            {text}
                        </text>
                    </svg>
                ))}
            </section>

            <section className="systems-ad">
                <div className="video-box">
                    <video playsInline autoPlay muted loop controls>
                        <source src="/assets/TSE_shorts_ad.mp4" type="video/mp4" />
                    </video>
                </div>

                <img className="poster" src="/assets/IMS_The_Systems_Event_Flyer.png" alt="Systems Event Poster" />
            </section>

            <main className="systems-join-section">
                <p>hover me!</p>

                <div className="join-bullet-div">
                    <img className="arrow" src="/assets/MC_arrow.png" alt="" />

                    <ul>
                        <li>
                            <a className="join-server" href="https://discord.gg/mjdy4uH5xB">
                                Join the Systems Event server
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="join-bullet-div">
                    <img className="arrow" src="/assets/MC_arrow.png" alt="" />

                    <ul>
                        <li>Fill in the application</li>
                        <li className="list-small">Applications open until 01 July!</li>
                    </ul>
                </div>

                <div className="join-bullet-div">
                    <img className="arrow" src="/assets/MC_arrow.png" alt="" />

                    <ul>
                        <li>Plan your system</li>
                    </ul>
                </div>

                <div className="join-bullet-div">
                    <img className="arrow" src="/assets/MC_arrow.png" alt="" />

                    <ul>
                        <li>Interact with other systems!</li>
                    </ul>
                </div>
            </main>*/}

                <main className="systems-announcement">
                    <h1>Read the announcement by Turtle, Lead Organiser of TSE:</h1>
                    <div className="systems-message-box">
                        <p>I want to start by thanking those who participated for their hard efforts to make this experiment work, and in many ways it certainly did.</p>

                        <p>
                            However, due to low activity levels and scientific issues with the experiment, the results are unlikely to meet the expectations of IMS, as pointed out during our meeting
                            in the main server for many of the reasons listed on the notes.
                        </p>

                        <p>
                            This is not the end of the server, and we are planning on continuing it as long as we have funds available as a SMP. We believe people are still having fun, so why stop
                            now. The end of all non-SMP event functions will be right after we release the end (we will decide on the date for that in #voting momentarily). We will also have other
                            votes on how the SMP will work.
                        </p>

                        <p>
                            Here is a brief overview of our plan for the next steps and next activity:
                            <ol>
                                <li>End the experiment</li>
                                <li>Vote on SMP rules</li>
                                <li>Make video on why the experiment failed to the same critiques we have of civs</li>
                                <li>People join IMS Labs (when Harlow finishes ofc)</li>
                                <li>IMS Labs works with all these people (especially those from TSE) to decide on what activity is next out of a wide variety of options we have </li>
                            </ol>
                        </p>

                        <p>
                            Again, thank you so much for your support and time. The experiment taught us many things for whatever we do next and strengthened our community. I look forward to working
                            with all of you on the vid!
                        </p>

                        <p>[attached pdf, see announcement in the Discord server]</p>
                    </div>
                    <hr />
                </main>
                <p className="systems-join">
                    <a href="https://discord.gg/tdaVBJskhk">Join the Systems Experiment server</a>
                </p>
            </div>
            <Footer />
        </>
    );
}
