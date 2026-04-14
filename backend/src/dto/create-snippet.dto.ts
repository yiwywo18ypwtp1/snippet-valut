import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateSnippetDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsArray()
    tags?: string[];

    @IsOptional()
    @IsString()
    type?: string;
}