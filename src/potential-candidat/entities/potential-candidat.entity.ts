import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PotentialCandidat {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;
}