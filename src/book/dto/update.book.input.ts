import { Field, ID, InputType, PartialType } from "@nestjs/graphql";
import { CreateBookInput } from "./create.book.input";
import { IsNotEmpty } from "class-validator";


@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput){
    @Field(()=>ID)
    @IsNotEmpty()
    id:string
}