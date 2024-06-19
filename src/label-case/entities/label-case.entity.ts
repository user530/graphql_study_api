import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '@prisma/client';

@ObjectType()
export class LabelCase {
    @Field(() => Int)
    id: number;

    @Field()
    singular: string;

    @Field()
    plural: string;

    // @Field(() => [Category])
    // categories: Category[];
}