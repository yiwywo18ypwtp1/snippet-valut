import { SnippetService } from "./snippet.service";
import { CreateSnippetDto } from "../dto/create-snippet.dto";
export declare class SnippetController {
    private readonly snippetService;
    constructor(snippetService: SnippetService);
    create(dto: CreateSnippetDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(q?: string, tag?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("../schemas/snippet.schema").SnippetDocument, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null, import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("../schemas/snippet.schema").SnippetDocument, "findOne", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null, import("mongoose").Document<unknown, {}, import("../schemas/snippet.schema").SnippetDocument, {}, import("mongoose").DefaultSchemaOptions> & import("../schemas/snippet.schema").Snippet & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("../schemas/snippet.schema").SnippetDocument, "findOneAndDelete", {}>;
}
