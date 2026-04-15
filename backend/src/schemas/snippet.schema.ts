import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SnippetDocument = Snippet & Document;

@Schema({ timestamps: true })
export class Snippet {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;

  @Prop([String])
  tags: string[];

  @Prop({ enum: ['link', 'note', 'command'] })
  type: string;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);

SnippetSchema.index({ title: 'text', content: 'text' });
