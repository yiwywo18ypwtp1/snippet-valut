import { Model } from "mongoose";
import { CreateSnippetDto } from "../dto/create-snippet.dto";
import { UpdateSnippetDto } from "../dto/update-snippet.dto";
import { Snippet, SnippetDocument } from "../schemas/snippet.schema";
export declare class SnippetService {
    private snippetModel;
    constructor(snippetModel: Model<SnippetDocument>);
    create(dto: CreateSnippetDto): Promise<import("mongoose").Document<unknown, {}, SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(q?: string, tag?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, SnippetDocument, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateSnippetDto): Promise<import("mongoose").Document<unknown, {}, SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
