import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Locale } from 'src/shared/enums';
import { Program } from 'src/program/entities/Program.entity';

// Register enums
registerEnumType(Locale, {
    name: 'Locale',
});

@ObjectType()
export class StudyField {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field({ nullable: true })
    copyToKk?: boolean;

    @Field()
    slug: string;

    @Field(() => Locale)
    locale: Locale;

    @Field(() => Date)
    published_at: Date;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    // @Field(() => [Program])
    // programs: Program[];
}