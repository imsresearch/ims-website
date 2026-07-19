import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				IMS - Sitemap
			</title>
			<meta name={"application-name"} content={"Institute of Minecraft Studies (IMS) Website"} />
			<meta name={"author"} content={"matcha_tea"} />
			<meta name={"description"} content={"IMS - The home of Minecraft Theories"} />
			<meta name={"keywords"} content={"IMS, Institute of Minecraft Studies, Minecraft theory, MST, MT, Minecraft Server Theory, Minecraft Theory, Theory Events"} />
			<link rel={"shortcut icon"} href={"/assets/favicon.png"} type={"image/x-icon"} />
		</Helmet>

		{/*top header - banner + icons*/}
		<TopHeader/>

		<hr margin="0px 0px 0px 0px" padding="0 0 0 0"/>
		
		{/*lower header - hyperlinks*/}
		<LowerHeader/>

		{/*map*/}
		<section
			border-width="0.2rem 0"
			border-style="solid"
			padding="2rem 0 2rem 0"
			font="2rem --fontFamily-sans"
			sm-font="1.5rem --fontFamily-sans"
		>
			<p font="4rem --fontFamily-sans" sm-font="3rem --fontFamily-sans">Sitemap</p>

			<br/><br/>

			<ul style={{listStyleType: "square"}}>
				<li><a href="/">Home</a></li>
				<li><a href="/about-us">About us</a></li>
				<li><a href="/journal">Latest issue</a></li>
				<li><a href="/publish-with-us">Publish with us</a></li>
				<ul style={{listStyleType: "disc"}}>
					<li><a href="/publish-with-us/style-guide">Style guide</a></li>
				</ul>
				<li><a href="/systems-event">Systems Event</a></li>
			</ul>
		</section>
		
		{/*footer*/}
		<Footer/>
	</Theme>;
});