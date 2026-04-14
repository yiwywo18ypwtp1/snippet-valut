import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSnippetDto } from "src/dto/create-snippet.dto";
import { UpdateSnippetDto } from "src/dto/update-snippet.dto";
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

    async findOne(id: string) {
        const snippet = await this.snippetModel.findById(id);

        if (!snippet) {
            throw new NotFoundException('Snippet not found');
        }

        return snippet;
    }

    async update(id: string, dto: UpdateSnippetDto) {
        const updated = await this.snippetModel.findByIdAndUpdate(
            id,
            dto,
            {
                new: true,
                runValidators: true,
            },
        );

        if (!updated) {
            throw new Error('Snippet not found');
        }

        return updated;
    }

    async delete(id: string) {
        const deleted = await this.snippetModel.findByIdAndDelete(id);

        if (!deleted) {
            throw new NotFoundException('Snippet not found');
        }

        return deleted;
    }
}