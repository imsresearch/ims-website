import { Helmet } from "react-helmet";
import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

import "../styles/about-us.css"

export default function AboutUs() {
    return (
        <div className="page">
            <Helmet>
                <title>IMS - About us</title>

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
                    content="IMS, Institute of Minecraft Studies, Minecraft theory, MST, MT, Minecraft Server Theory, Minecraft Theory, Theory Events"
                />
                <link
                    rel="shortcut icon"
                    href="/assets/favicon.png"
                    type="image/x-icon"
                />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <section className="about-section">
                <div className="about-container">
                    <h1>About us</h1>

                    <p>
                        The Institute of Minecraft Studies works to explore and
                        test systems in and through Minecraft, so that people
                        understand, shape, and create these systems better for
                        their worlds in-game and beyond.
                    </p>

                    <p>
                        We believe that schools often focus too much on teaching
                        information, and not enough on freedom to explore and
                        test. Many young people do not have a place to seriously
                        explore these ideas, not in school, online, or with
                        friends.
                    </p>

                    <p>
                        And so, IMS exists to change this, being a place where
                        anyone, no matter their identity or interests, can
                        explore ideas and experiment with them through
                        Minecraft. People need a space where they can have this
                        intellectual freedom so they can grow and feel valuable.
                        Minecraft is actually a perfect environment for this
                        mission, because it is interactive, systems-based, and
                        accessible for everyone.
                    </p>

                    <p>
                        The IMS centres around theory creation, running
                        experiments, and creating content about Minecraft
                        theory.
                    </p>
                </div>
            </section>

            <section className="mission-section">
                <h2>Read more from our mission statement:</h2>

                <div className="mission-viewer">
                    <iframe
                        title="IMS Mission Statement"
                        src="/database/non-published/IMS-mission.pdf"
                        style={{
                            width: "100%",
                            height: "85vh",
                            border: "none",
                        }}
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}