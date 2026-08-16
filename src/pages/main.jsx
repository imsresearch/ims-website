import React, { useState } from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader.jsx";
import LowerHeader from "../components/LowerHeader.jsx";
import Footer from "../components/Footer.jsx";

import "../styles/index.css";

export default function Main() {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className="page">
        <Helmet>
            <title>Institute of Minecraft Studies</title>
            <meta name="application-name" content="Institute of Minecraft Studies" />
            <meta name="description" content="This is the IMS - The home of Minecraft Theories. We are an inclusive, vibrant, and friendly community with many opportunites: including in the Journal department, playing in events, writing theories about Minecraft, and having lively debates!" />
        </Helmet>

		<TopHeader/>
		<LowerHeader/>

		{/*latest content box*/}
		<section className="latest-box">
		</section>

		{/*video embed*/}
		<section className="video-section">
			<p className="video-title">
			Latest Minecraft Server Theory video
			</p>

			<div id="video-embed" className={fullScreen ? "video full" : "video"}>
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube-nocookie.com/embed/videoseries?list=PLJmTEYXxCKpnL_hVZCVMU4OP77dU5Q6IH"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>

			<div className={`video-controls ${fullScreen ? "fullscreen" : "collapsed"}`}>
				{!fullScreen ? (
					<p onClick={() => setFullScreen(true)}><a href="#video-embed">Expand</a></p>
				) : (
					<p onClick={() => setFullScreen(false)}><a href="#video-embed">Minimise</a></p>
				)}
			</div>
		</section>

		{/*articles box*/}
		<main className="article-box" id="articles">
            <a className="latest-article" href="https://imsresearch.substack.com/p/the-arena-vs-the-idea">
				<h3 className="article-title">The Arena vs. The Idea</h3>
				<p>The Fundamental Toxicity of Overly Gamified Minecraft Communities - By Turtle2770</p>
				<small>16 August · Opinion</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/the-consequences-of-poor-design-a">
				<h3 className="article-title">The Consequences of Poor Design: A Critique of the Systems Experiment</h3>
				<p>By Harlow: Being a part of the first ever event of the IMS as a player and organiser gave her a wide field of vision about what went right - and what went wrong.</p>
				<small>21 July · Opinion</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/flood-of-messages-show-frustrations">
				<h3 className="article-title">Flood of messages show frustrations of Raid Farms players</h3>
				<p>Players have been voicing their anger and frustration at PineconeLP, creator of RF, for inaction on improving the server.</p>
				<small>05 July · News</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/anarchy-without-ruin-minecraft-bloodlines">
				<h3 className="article-title">Anarchy Without Ruin: Minecraft Bloodlines as a Case Study in Effective Server Design</h3>
				<p>By Miimuu: The IMS has long been theorising about the perfect server - is MCB it?</p>
				<small>03 July · Essay</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/the-reactionary-nature-of-popular">
				<h3 className="article-title">The Reactionary Nature of Popular Answers to the Two Week Phase</h3>
				<p>By Harlow: Some suggest that a return to the past would solve the issues that plague contemporary Minecraft servers and their players — however, is this at all true?</p>
				<small>10 June · Essay</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/two-teams-two-theories-of-power">
				<h3 className="article-title">Two Teams, Two Theories of Power</h3>
				<p>By Rev, IMS columnist and reviewer, investigating what's been going on behind the scenes for the upcoming <a href="/systems-event">Systems Event</a></p>
				<small>09 June · Opinion</small>
			</a>	

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/a-short-rant-about-minecraft-youtube">
				<h3 className="article-title">A short rant about Minecraft YouTube</h3>
				<p>matcha_tea talks about her transphobic comments on her latest video; what do we do about it?</p>
				<small>01 June · Opinion</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/new-member-created-logo-for-the-ims">
				<h3 className="article-title">New member-created logo for the IMS announced</h3>
				<p>The logo created by @scorevon marks a new chapter for the IMS; I interviewed the designer. What does this mean for the org?</p>
				<small>11 May · Opinion</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/summer-event-announced-with-ongoing">
				<h3 className="article-title">Summer event announced with ongoing votes</h3>
				<p>"The idea of the event is that each player would choose and operate a specific system within a single Minecraft survival server...Players would interact with the systems that their team creates to test them and create real dynamics."</p>
				<small>15 Apr · News</small>
			</a>

            <a className="article-linkbox" href="https://discord.gg/yzfQzaqyPR">
                <h3 className="article-title">To be written...</h3>
                <p>Contact us by clicking "publish with us" on the top bar, or click this box</p>
                <small>30 Apr · Information</small>
			</a>
        </main>

      	<Footer/>
    </div>
  );
}