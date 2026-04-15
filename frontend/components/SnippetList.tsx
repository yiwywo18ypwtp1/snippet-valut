import { Snippet } from "@/types/snippet";
import Link from "next/link";

export default function SnippetList({ snippets }: { snippets: Snippet[] }) {
    if (!snippets.length) {
        return <p>No snippets found</p>;
    }

    return (
        <div className="space-y-2">
            {snippets.map((s: Snippet) => (
                <Link key={s._id} href={`/snippets/${s._id}`}>
                    <div className="border p-3 hover:bg-gray-100">
                        <h3 className="font-bold">{s.title}</h3>
                        <p className="text-sm">{s.content.slice(0, 100)}</p>
                        <div className="text-xs text-gray-500">
                            {s.tags.join(", ")}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
