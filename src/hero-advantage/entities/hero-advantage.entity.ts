import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HeroAdvantage {
    @Field(() => Int)
    id: number;

    @Field()
    string: string;
}