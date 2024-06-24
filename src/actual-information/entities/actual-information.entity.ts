import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Picture } from 'src/picture/entities';
import { Program } from 'src/program/entities/program.entity';

@ObjectType()
export class ActualInformation {
    @Field(() => Int)
    id: number;

    @Field()
    description: string;

    @Field({ nullable: true })
    paragraph?: string;

    @Field(() => Picture, { nullable: true })
    actualPhoto1?: Picture;

    @Field(() => Picture, { nullable: true })
    actualPhoto2?: Picture;

    @Field(() => Program)
    Program: Program;
}