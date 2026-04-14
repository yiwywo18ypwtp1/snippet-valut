import { Document } from 'mongoose';
export type SnippetDocument = Snippet & Document;
export declare class Snippet {
    title: string;
    content: string;
    tags: string[];
    type: string;
}
export declare const SnippetSchema: import("mongoose").Schema<Snippet, import("mongoose").Model<Snippet, any, any, any, any, any, Snippet>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Snippet, Document<unknown, {}, Snippet, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Snippet & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Snippet, Document<unknown, {}, Snippet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Snippet & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, Snippet, Document<unknown, {}, Snippet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Snippet & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], Snippet, Document<unknown, {}, Snippet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Snippet & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, Snippet, Document<unknown, {}, Snippet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Snippet & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Snippet>;
