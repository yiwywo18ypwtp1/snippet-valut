export type Snippet = {
    _id: string;
    title: string;
    content: string;
    tags: string[];
    type: "link" | "note" | "command";
    createdAt: string;
    updatedAt: string;
};

export type CreateSnippet = Pick<
    Snippet,
    "title" | "content" | "tags" | "type"
>;

export type UpdateSnippet = Pick<
    Snippet,
    "title" | "content" | "tags" | "type"
>;
