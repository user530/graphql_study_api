import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Skill } from 'src/skill/entities/skill.entity';

@ObjectType()
export class Subject {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    string?: string;

    @Field({ nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    duration?: number;

    @Field({ nullable: true })
    new?: boolean;

    @Field(() => [Skill], { nullable: 'itemsAndList' })
    skills?: Skill[];
}