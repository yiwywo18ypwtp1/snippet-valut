import { Controller, Post, Get, Delete, Body, Query, Param } from "@nestjs/common";
import { SnippetService } from "./snippet.service";
import { CreateSnippetDto } from "src/dto/create-snippet.dto";

@Controller('snippets')
export class SnippetController {
    constructor(private readonly snippetService: SnippetService) { }

    @Post()
    create(@Body() dto: CreateSnippetDto) {
        return this.snippetService.create(dto);
    }

    @Get()
    findAll(
        @Query('q') q?: string,
        @Query('tag') tag?: string,
    ) {
        return this.snippetService.findAll(q, tag);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.snippetService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.snippetService.delete(id);
    }
}