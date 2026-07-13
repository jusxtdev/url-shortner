import React, { useState } from "react"
import { api } from "../lib/axios";

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setShortUrl("")

        try {
            const res = await api.post('/url', {
                "original_url": url
            })
            console.log(res.data.short_URL);

            setShortUrl(res.data.short_URL)
            setUrl("")
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl)
    }

    return <>
        <div className="eyebrow">no signup needed</div>
        <h1>Shorten a link<br />in one click</h1>
        <p className="sub">Paste a long URL below and get a short one back instantly.</p>

        <form className="shorten-box" onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
            />

            <button type="submit" disabled={loading}>
                {loading ? "Shortening..." : "Shorten"}
            </button>
        </form>

        {shortUrl && (
            <div className="result show">
                <span className="link">{shortUrl}</span>
                <button onClick={handleCopy}>Copy</button>
            </div>
        )}

        <div className="meta-row">
            <span>&nbsp;</span>
            <a href="#">view analytics →</a>
        </div>
    </>
}

