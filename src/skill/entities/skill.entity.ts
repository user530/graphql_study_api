import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Subject } from 'src/subject/entities/subject.entity';

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

    @Field(() => [Subject], { nullable: 'itemsAndList' })
    subjects?: Subject[];
}