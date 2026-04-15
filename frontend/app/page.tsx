"use client";

import { useEffect, useState } from "react";
import { getSnippets, createSnippet } from "@/api/api";
import SnippetForm from "@/components/SnippetForm";
import SnippetList from "@/components/SnippetList";
import { CreateSnippet, Snippet } from "@/types/snippet";

export default function Home() {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [q, setQ] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function load() {
        setLoading(true);
        const data = await getSnippets(q, tag);
        setSnippets(data);
        setLoading(false);
    }

    useEffect(() => {
        (async () => {
            await load();
        })();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-5 space-y-5">
            <h1 className="text-2xl font-bold">Snippet Vault</h1>

            <div className="flex gap-2">
                <input
                    placeholder="Search..."
                    className="border p-2 w-full"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <input
                    placeholder="Tag"
                    className="border p-2"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
                <button onClick={load} className="bg-black text-white px-3">
                    Go
                </button>
            </div>

            <SnippetForm
                onSubmit={async (data: CreateSnippet) => {
                    await createSnippet(data);
                    load();
                }}
            />

            {loading ? <p>Loading...</p> : <SnippetList snippets={snippets} />}
        </div>
    );
}
