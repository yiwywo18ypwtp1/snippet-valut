import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Snippet, SnippetSchema } from 'src/schemas/snippet.schema';
import { SnippetService } from './snippet.service';
import { SnippetController } from './snippet.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Snippet.name, schema: SnippetSchema },
        ]),
    ],
    controllers: [SnippetController],
    providers: [SnippetService],
})
export class SnippetModule { }