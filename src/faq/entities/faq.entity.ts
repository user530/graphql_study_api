import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Faq {
    @Field(() => Int)
    id: number;

    @Field()
    question: string;

    @Field()
    answer: string;
}