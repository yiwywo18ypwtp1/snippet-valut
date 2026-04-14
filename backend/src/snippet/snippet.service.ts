import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSnippetDto } from "src/dto/create-snippet.dto";
import { Snippet, SnippetDocument } from "src/schemas/snippet.schema";

@Injectable()
export class SnippetService {
    constructor(
        @InjectModel(Snippet.name)
        private snippetModel: Model<SnippetDocument>,
    ) { }

    create(dto: CreateSnippetDto) {
        return this.snippetModel.create(dto);
    }

    findAll(q?: string, tag?: string) {
        const filter: any = {};

        if (q) {
            filter.$or = [
                { title: { $regex: q, $options: 'i' } },
                { content: { $regex: q, $options: 'i' } },
            ];
        }

        if (tag) {
            filter.tags = tag;
        }

        return this.snippetModel.find(filter).sort({ createdAt: -1 });
    }

    findOne(id: string) {
        return this.snippetModel.findById(id);
    }

    delete(id: string) {
        return this.snippetModel.findByIdAndDelete(id);
    }
}