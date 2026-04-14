"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const snippet_schema_1 = require("../schemas/snippet.schema");
let SnippetService = class SnippetService {
    snippetModel;
    constructor(snippetModel) {
        this.snippetModel = snippetModel;
    }
    create(dto) {
        return this.snippetModel.create(dto);
    }
    findAll(q, tag) {
        const filter = {};
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
    async findOne(id) {
        const snippet = await this.snippetModel.findById(id);
        if (!snippet) {
            throw new common_1.NotFoundException('Snippet not found');
        }
        return snippet;
    }
    async update(id, dto) {
        const updated = await this.snippetModel.findByIdAndUpdate(id, dto, {
            new: true,
            runValidators: true,
        });
        if (!updated) {
            throw new Error('Snippet not found');
        }
        return updated;
    }
    async delete(id) {
        const deleted = await this.snippetModel.findByIdAndDelete(id);
        if (!deleted) {
            throw new common_1.NotFoundException('Snippet not found');
        }
        return deleted;
    }
};
exports.SnippetService = SnippetService;
exports.SnippetService = SnippetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(snippet_schema_1.Snippet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SnippetService);
//# sourceMappingURL=snippet.service.js.map