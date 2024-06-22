import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ModuleTool {
    @Field(() => Int)
    id: number;

    @Field()
    tool: string;
}