import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MiniSearch from "minisearch";

import TopHeader from "../../components/TopHeader";
import LowerHeader from "../../components/LowerHeader";
import JournalFooter from "../../components/JournalFooter";

import "../../styles/articles-index.css";

export default function ArticlesIndex() {
    const [searchIndex, setSearchIndex] = useState(null);
    const [results, setResults] = useState([]);
    var [query, setQuery] = useState("");
    const [suggestion, setSuggestion] = useState("");
    var [searchIMSC, setSearchIMSC] = useState(false);
    const [visibleCount, setVisibleCount] = useState(20);
    const [indexArticleInfoOpen, setindexArticleInfoOpen] = useState(false);

    const [openIds, setOpenIds] = useState([]);

    const toggleArticle = (id) => {
        setOpenIds(prevOpenIds => {
        if (prevOpenIds.includes(id)) {
            // If already open, filter it out (close it)
            return prevOpenIds.filter(itemid => itemid !== id);
        } else {
            // Otherwise, add it to the open list
            return [...prevOpenIds, id];
        }
        });
    };

    const suggestions = ["raid farms", "server", "player", "behaviour", "people", "solution", "social", "how", "why", "minecraft"];

    useEffect(() => {
        fetch("/assets/search_index.json")
            .then((res) => res.json())
            .then((data) => {
                const miniSearch = new MiniSearch({
                    fields: ["imsc", "content"],
                    storeFields: ["id", "file", "path", "page", "content", "imsc", "authorCode", "nPublished", "publicationUsed", "wordCount", "title"],
                    searchOptions: {
                        boost: searchIMSC ? { content: 1000, fuzzy: 0 } : { content: 5 },
                        prefix: !searchIMSC,
                    },
                });

                miniSearch.addAll(data);
                setSearchIndex(miniSearch);
            });

        setSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
    }, []);

    useEffect(() => {
        if (!searchIndex) return;

        if (!query || query.length < 2) {
            setResults([]);
            setVisibleCount(20);
            setSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
            return;
        }

        const found = searchIndex.search(query, {
            boost: searchIMSC ? { imsc: 9999, fuzzy: 0 } : { content: 5 },
            prefix: !searchIMSC,
        });

        const exact = found.filter((x) => x.imsc?.toLowerCase() === query.toLowerCase());

        const others = found.filter((x) => x.imsc?.toLowerCase() !== query.toLowerCase());

        setResults(
            [...exact, ...others].map((item) => ({
                ...item,
                snippet: makeSnippet(item.content, query),
            }))
        );

        setVisibleCount(20);
    }, [query, searchIndex, searchIMSC]);

    useEffect(() => {
        function handleScroll() {
            if (results.length === 0) return;

            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 300) {
                setVisibleCount((v) => Math.min(v + 20, results.length));
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [results]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const search = params.get("search") || "";
        const withIMSC = params.get("IMSC") === "true";

        setQuery(search);
        setSearchIMSC(withIMSC);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(window.location.search);

            if (query) {
                params.set("search", query);
            } else {
                params.delete("search");
            }

            params.set("IMSC", searchIMSC);

            window.history.replaceState({}, "", `?${params.toString()}`);
        }, 500);

        return () => clearTimeout(timeout);
    }, [query, searchIMSC]);

    function makeSnippet(text, query, distance = 15) {
        const words = text.split(" ");
        const terms = query.toLowerCase().split(" ");
        const positions = [];

        for (let i = 0; i < words.length; i++) {
            if (
                terms.length > 1 &&
                words
                    .slice(i, i + terms.length)
                    .join(" ")
                    .toLowerCase() === query.toLowerCase()
            ) {
                positions.push(i);
                continue;
            }

            for (const term of terms) {
                if (words[i].toLowerCase().startsWith(term)) {
                    positions.push(i);
                }
            }
        }

        if (positions.length === 0) return text.slice(0, 200);

        const centre = positions[Math.floor(positions.length / 2)];

        return words.slice(Math.max(0, centre - distance), Math.min(words.length, centre + distance + 1)).join(" ");
    }

    function highlight(text, query) {
        if (!text) return "";

        const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
    }

    const displayedResults = results.slice(0, visibleCount);

    return (
        <>
            <Helmet>
                <title>Articles index | IMS</title>
                <meta name="application-name" content="Articles index | IMS" />
                <meta name="description" content="Index of articles published by the IMS Publishing Department." />
            </Helmet>

            <TopHeader />
            <LowerHeader />

            <div className="header">
                <h1>
                    IMS Articles Index
                    <p className="pub-q">
                        <a href="/publish-with-us">Want your article to be indexed? Click here!</a>
                    </p>
                </h1>

                <p>This is an index of all articles published by the IMS Publishing Department.</p>
            </div>

            <div className="search-box">
                <input
                    className="input-box"
                    placeholder="Tip: If you can't find what you want, use the 'View all indexed articles' button below"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <div className="underButtons">
                    <button className={searchIMSC ? "searchIMSCButton pressedIMSC" : "searchIMSCButton unpressedIMSC"} onClick={() => setSearchIMSC(!searchIMSC)}>
                        Search for IMSC
                    </button>

                    <a href="https://github.com/imsresearch/imsresearch.github.io/tree/main/public/database/published" target="_blank">
                        <button className="accessButton">View all indexed articles</button>
                    </a>
                </div>

                <div className="number-results">
                    {!query && !searchIMSC ? (
                        <>
                            Why not try searching for <i>{suggestion}</i>
                        </>
                    ) : searchIMSC && !query ? (
                        <>Searching for IMSCs...</>
                    ) : (
                        `${results.length} results for ${query}`
                    )}
                </div>
            </div>

            <div className="results-div">
                {displayedResults.map((item, index) => {
                    const isOpen = openIds.includes(item.id);

                    return(
                        <div className="result" key={index}>
                            <p className="result-title">
                                <a href={`/database/published/${item.path}#page=${item.page}`} target="_blank">
                                    {item.title}
                                </a>
                            </p>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{width: "20%"}}>
                                    <div style={{margin: "5px 0", padding: "0 2rem"}}>
                                        <div onClick={() => toggleArticle(item.id)}>
                                            {isOpen
                                            ?
                                                <button>Hide article info</button>
                                            :
                                                <button>Show article info</button>
                                            }
                                        </div>
                                        {isOpen && (
                                            <>
                                                <div style={{margin: "5px 0"}}>
                                                    <p>IMSC: {item.imsc}</p>
                                                    <hr className="small-hr"/>
                                                    <p>Published through: {item.publicationUsed}</p>
                                                    <p>Author code: {item.authorCode}</p>
                                                    <p>Number article published by author: {item.nPublished}</p>
                                                    <hr className="small-hr"/>
                                                    <p>Word Count: {item.wordCount}</p>
                                                </div>
                                                <hr style={{border: "2px solid gray"}}/>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div
                                    style={{width: "80%", alignSelf: "center", padding: "0 2rem"}}
                                    className="result-context"
                                    dangerouslySetInnerHTML={{
                                        __html: "..." + highlight(item.snippet, query) + "...",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <JournalFooter />
        </>
    );
}
