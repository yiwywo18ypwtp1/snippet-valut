"use client";

import { useEffect, useState } from "react";
import { getSnippet, deleteSnippet, updateSnippet } from "@/api/api";
import { useParams, useRouter } from "next/navigation";
import SnippetForm from "@/components/SnippetForm";
import { CreateSnippet, Snippet } from "@/types/snippet";

export default function SnippetPage() {
    const { id } = useParams();
    const router = useRouter();
    const [snippet, setSnippet] = useState<Snippet>();

    useEffect(() => {
        getSnippet(id as string).then(setSnippet);
    }, [id]);

    if (!snippet) return <p>Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto p-5 space-y-5">
            <h1 className="text-xl font-bold">Edit Snippet</h1>

            <SnippetForm
                initial={snippet}
                onSubmit={async (data: CreateSnippet) => {
                    await updateSnippet(id as string, data);
                    router.push("/");
                }}
            />

            <button
                className="bg-red-500 text-white px-4 py-2"
                onClick={async () => {
                    await deleteSnippet(id as string);
                    router.push("/");
                }}
            >
                Delete
            </button>
        </div>
    );
}
