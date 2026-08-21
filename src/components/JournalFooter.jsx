import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__inner-div">
                    <p className="footer__top-link">
                        <a href="#header">(Top)</a>
                    </p>
                    <a href="/#header" className="footer__logo-link">
                        <img
                            src="/assets/pubdep_logo.png"
                            alt="IMS Publishing Department Logo"
                            className="footer__logo"
                        />
                    </a>
                    <p className="footer__copyright">
                        <strong>©</strong> 2026 Institute of Minecraft Studies
                    </p>
                    <p className="footer__credit">
                        <strong>Website built by @matcha._.tea</strong>
                        <br/>
                        <strong>Credit to @harlowbot for the PubDep and IMS logos</strong>
                        <br/>
                        <strong>Thank you to all the various contributing authors for making this project possible</strong>
                    </p>
                    <div className="footer__socials">
                        <a
                            href="https://imsresearch.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/assets/substack_icon.png"
                                alt="Substack"
                            />
                        </a>
                        <a
                            href="https://discord.gg/vHnMhwdZA3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/discord_icon.png" alt="Discord" />
                        </a>
                        <a
                            href="https://www.youtube.com/playlist?list=PLJmTEYXxCKpnL_hVZCVMU4OP77dU5Q6IH"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/youtube_icon.png" alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
