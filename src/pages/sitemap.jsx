import React from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../components/TopHeader";
import LowerHeader from "../components/LowerHeader";
import Footer from "../components/Footer";

export default function SiteMap() {
	return (
        <>
            <TopHeader/>
            <LowerHeader/>

            {/*map*/}
            <nav
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
            </nav>
            
            {/*footer*/}
            <Footer/>
        </>
    );
}