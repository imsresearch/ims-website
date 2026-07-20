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
			<meta name="application-name" content="Institute of Minecraft Studies (IMS) Website" />
			<meta name="author" content="matcha_tea" />
			<meta name="description" content="IMS - The home of Minecraft Theories" />
			<meta name="keywords" content="IMS, Institute of Minecraft Studies, Minecraft theory, MST, MT, Minecraft Server Theory, Minecraft Theory, Theory Events" />
            <meta name="google-site-verification" content="Q2R63_QsY0p81Zd8peD9DxJuYbZN739N6CfjcHlROOM" />
			<link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
      	</Helmet>

		<TopHeader/>
		<LowerHeader/>

		{/*latest content box*/}
		<section className="systems-box">
			<div className="systems-box-inner">
				<p className="systems-title">
					Apply for <br /> The Systems Experiment now!
				</p>
			</div>
			{/* desktop SVGs */}
			<div className="svgs desktop-only">
			<svg viewBox="0 0 217 217" className="hex green">
				<polygon points="108,5 212,108 108,212 5,108" />
				<text x="108" y="108">Two teams</text>
			</svg>

			<svg viewBox="0 0 217 217" className="hex gold">
				<polygon points="108,5 212,108 108,212 5,108" />
				<text x="108" y="108">Make systems</text>
			</svg>

			<svg viewBox="0 0 217 217" className="hex blue">
				<polygon points="108,5 212,108 108,212 5,108" />
				<text x="108" y="108">Interact</text>
			</svg>

			<svg viewBox="0 0 217 217" className="hex purple">
				<polygon points="108,5 212,108 108,212 5,108" />
				<text x="108" y="108">Theorise</text>
			</svg>
			</div>

			{/* mobile SVGs */}
			<div className="svgs mobile-only">
				<svg viewBox="0 0 217 217" className="hex green small">
					<polygon points="108,5 212,108 108,212 5,108" />
					<text x="108" y="108">Two teams</text>
				</svg>
				<svg viewBox="0 0 217 217" className="hex gold small">
					<polygon points="108,5 212,108 108,212 5,108" />
					<text x="108" y="108">Make systems</text>
				</svg>
				<svg viewBox="0 0 217 217" className="hex blue small">
					<polygon points="108,5 212,108 108,212 5,108" />
					<text x="108" y="108">Interact</text>
				</svg>
				<svg viewBox="0 0 217 217" className="hex purple small">
					<polygon points="108,5 212,108 108,212 5,108" />
					<text x="108" y="108">Theorise</text>
				</svg>
			</div>

			<a className="link-box read-more" href="/systems-event">Read more ⇛</a>
			<a className="link-box join-systems" href="https://discord.gg/tdaVBJskhk">Join the event server</a>
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

		{/*articles box - create new <section> for each row of 3*/}
		<section className="article-box" id="articles">
            <a className="latest-article article-linkbox" href="https://imsresearch.substack.com/p/the-consequences-of-poor-design-a">
				<p className="article-title">The Consequences of Poor Design: A Critique of the Systems Experiment</p>
				<p>By Harlow: Being a part of the first ever event of the IMS as a player and organiser gave her a wide field of vision about what went right - and what went wrong.</p>
				<small>21 July · Opinion</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/anarchy-without-ruin-minecraft-bloodlines">
				<p className="article-title">Anarchy Without Ruin: Minecraft Bloodlines as a Case Study in Effective Server Design</p>
				<p>By Miimuu: The IMS has long been theorising about the perfect server - is MCB it?</p>
				<small>03 July · Essay</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/the-reactionary-nature-of-popular">
				<p className="article-title">The Reactionary Nature of Popular Answers to the Two Week Phase</p>
				<p>By Harlow: Some suggest that a return to the past would solve the issues that plague contemporary Minecraft servers and their players — however, is this at all true?</p>
				<small>10 June · Essay</small>
			</a>
		</section>

		<section className="article-box">
            <a className="article-linkbox" href="https://imsresearch.substack.com/p/two-teams-two-theories-of-power">
				<p className="article-title">Two Teams, Two Theories of Power</p>
				<p>By Rev, IMS columnist and reviewer, investigating what's been going on behind the scenes for the upcoming <a href="/systems-event">Systems Event</a></p>
				<small>09 June · Opinion</small>
			</a>	

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/a-short-rant-about-minecraft-youtube">
				<p className="article-title">A short rant about Minecraft YouTube</p>
				<p>matcha_tea talks about her transphobic comments on her latest video; what do we do about it?</p>
				<small>01 June · Opinion</small>
			</a>

            <a className="article-linkbox" href="https://imsresearch.substack.com/p/new-member-created-logo-for-the-ims">
				<p className="article-title">New member-created logo for the IMS announced</p>
				<p>The logo created by @scorevon marks a new chapter for the IMS; I interviewed the designer. What does this mean for the org?</p>
				<small>11 May · Opinion</small>
			</a>
		</section>

        <section className="article-box">
            <a className="article-linkbox" href="https://imsresearch.substack.com/p/summer-event-announced-with-ongoing">
				<p className="article-title">Summer event announced with ongoing votes</p>
				<p>"The idea of the event is that each player would choose and operate a specific system within a single Minecraft survival server...Players would interact with the systems that their team creates to test them and create real dynamics."</p>
				<small>15 Apr · News</small>
			</a>

            <a className="article-linkbox" href="https://discord.gg/yzfQzaqyPR">
            <p className="article-title">To be written...</p>
            <p>Contact us by clicking "publish with us" on the top bar, or click this box</p>
            <small>30 Apr · Information</small>
			</a>
        </section>

      	<Footer/>
    </div>
  );
}