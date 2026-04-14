"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSnippetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_snippet_dto_1 = require("./create-snippet.dto");
class UpdateSnippetDto extends (0, mapped_types_1.PartialType)(create_snippet_dto_1.CreateSnippetDto) {
}
exports.UpdateSnippetDto = UpdateSnippetDto;
//# sourceMappingURL=update-snippet.dto.js.map