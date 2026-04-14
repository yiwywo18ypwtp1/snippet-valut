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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetSchema = exports.Snippet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Snippet = class Snippet {
    title;
    content;
    tags;
    type;
};
exports.Snippet = Snippet;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Snippet.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Snippet.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Snippet.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['link', 'note', 'command'] }),
    __metadata("design:type", String)
], Snippet.prototype, "type", void 0);
exports.Snippet = Snippet = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Snippet);
exports.SnippetSchema = mongoose_1.SchemaFactory.createForClass(Snippet);
//# sourceMappingURL=snippet.schema.js.map