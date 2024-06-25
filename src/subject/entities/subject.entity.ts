import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Subject {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    string?: string;

    @Field({ nullable: true })
    title?: number;

    @Field(() => Int, { nullable: true })
    duration?: number;

    @Field({ nullable: true })
    new?: boolean;
}