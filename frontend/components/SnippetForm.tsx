"use client";

import { CreateSnippet, Snippet } from "@/types/snippet";
import { useState } from "react";

type FormProps = {
    onSubmit: ({}: CreateSnippet) => void;
    initial?: Snippet;
};

export default function SnippetForm({ onSubmit, initial }: FormProps) {
    const [title, setTitle] = useState<string>(initial?.title || "");
    const [content, setContent] = useState<string>(initial?.content || "");
    const [tags, setTags] = useState(initial?.tags?.join(",") || "");
    const [type, setType] = useState<"link" | "note" | "command">(
        initial?.type || "note",
    );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (!title || !content) {
                    alert("Title and content required");
                    return;
                }

                onSubmit({
                    title,
                    content,
                    tags: tags.split(",").map((t) => t.trim()),
                    type,
                });
            }}
            className="flex flex-col w-full gap-3 border p-4 rounded-lg"
        >
            <input
                className="w-full border p-2 rounded-md"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="w-full border p-2 rounded-md"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <input
                className="w-full border p-2 rounded-md"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />

            <select
                className="w-full border p-2 rounded-md"
                value={type}
                onChange={(e) =>
                    setType(e.target.value as "link" | "note" | "command")
                }
            >
                <option value="note">Note</option>
                <option value="link">Link</option>
                <option value="command">Command</option>
            </select>

            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-all">
                Save
            </button>
        </form>
    );
}
