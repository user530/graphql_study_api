import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Skill {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    string: string;

    @Field({ nullable: true })
    new?: boolean;
}