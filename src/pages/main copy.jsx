import React, { useState } from "react";
import { Helmet } from "react-helmet";
import VideoEmbed from "../components/VideoEmbed.jsx";
import TopHeader from "../components/TopHeader.jsx";
import LowerHeader from "../components/LowerHeader.jsx";
import Footer from "../components/Footer.jsx";

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
			<link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
      	</Helmet>

      	{/* <TopHeader /> */}

    	<hr className="divider" />

      	{/* <LowerHeader /> */}

		{/*latest content box*/}
		<section className="main">
			<h1 className="main-title">
			Apply for <br /> The Systems Experiment now!
			</h1>

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
			<svg viewBox="0 0 217 217" className="hex green small">...</svg>
			<svg viewBox="0 0 217 217" className="hex gold small">...</svg>
			<svg viewBox="0 0 217 217" className="hex blue small">...</svg>
			<svg viewBox="0 0 217 217" className="hex purple small">...</svg>
			</div>

			<a className="link-box" href="/systems-event">Read more ⇛</a>
			<a className="link-box" href="https://discord.gg/tdaVBJskhk">Join the event server</a>
		</section>

		{/*video embed*/}
		<section className="video-section">
			<h2 className="video-title">
			Latest Minecraft Server Theory video
			</h2>

			<div id="video-embed" className={fullScreen ? "video full" : "video"}>
			{/*<VideoEmbed>*/}
			</div>

			<div className="video-controls">
			{!fullScreen ? (
				<button onClick={() => setFullScreen(true)}>Expand</button>
			) : (
				<button onClick={() => setFullScreen(false)}>Minimise</button>
			)}
			</div>
		</section>

		{/*articles box - create new <section> for each row of 2*/}
		<section className="articles">
			<a className="article" href="https://imsresearch.substack.com/p/new-member-created-logo-for-the-ims">
			<h3>New member-created logo for the IMS announced</h3>
			<p>The logo created by @scorevon marks a new chapter...</p>
			<small>11 May · Opinion</small>
			</a>

			<a className="article" href="https://imsresearch.substack.com/p/summer-event-announced-with-ongoing">
			<h3>Summer event announced with ongoing votes</h3>
			<p>The idea of the event is that each player...</p>
			<small>15 Apr · News</small>
			</a>
		</section>

		<section className="articles">
			<a className="article" href="https://discord.gg/yzfQzaqyPR">
				<h3>To be written...</h3>
				<p>Could this article be written by you?</p>
				<small>30 Apr · Information</small>
			</a>
		</section>

      {/*<Footer />*/}
    </div>
  );
}