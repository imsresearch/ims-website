import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";

export default function ArchivePages() {
    return (
        <>
            <TopHeader/>
            <h1 style={{textAlign: "center"}}>Archived pages</h1>
            <div style={{padding: "1rem 5vw"}}>
                <p style={{fontWeight: "bold", textDecoration: "underline"}}>
                    <i>
                        Note: Pages below may be broken or display unusual behaviour due to deleted css or reorganised folders.
                        <br/>
                        This will not be fixed due to time and resource constraints.
                        <br/>
                        You may look at the GitHub repository history where this site is stored, or use a tool such as the Wayback Machine to save certain pages.
                    </i>
                </p>
            </div>
            <div style={{padding: "1rem 5vw"}}>
                <h2>Front pages</h2>
                <p><a href="/archive/tse-main">Main with TSE advertisement</a></p>
            </div>
            <div style={{padding: "1rem 5vw"}}>
                <h2>Events</h2>
                <p><a href="/archive/tse">The Systems Experiment</a></p>
                <p><a href="/archive/civ">CIV (Co-operation, the IMS, and Ventures)</a></p>
            </div>
            <Footer/>
        </>
    );
}
