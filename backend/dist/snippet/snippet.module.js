"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const snippet_schema_1 = require("../schemas/snippet.schema");
const snippet_service_1 = require("./snippet.service");
const snippet_controller_1 = require("./snippet.controller");
let SnippetModule = class SnippetModule {
};
exports.SnippetModule = SnippetModule;
exports.SnippetModule = SnippetModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_module_1.MongooseModule.forFeature([
                { name: snippet_schema_1.Snippet.name, schema: snippet_schema_1.SnippetSchema },
            ]),
        ],
        controllers: [snippet_controller_1.SnippetController],
        providers: [snippet_service_1.SnippetService],
    })
], SnippetModule);
//# sourceMappingURL=snippet.module.js.map