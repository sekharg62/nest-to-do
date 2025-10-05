import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Document } from "mongoose";

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop()
  @Field({ nullable: true })
  description?: string;

  @Prop({ required: true })
  @Field()
  author: string;
}

// 👉 Correct type for Mongoose injection
export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);
