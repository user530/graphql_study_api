import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { LabelCase } from 'src/label-case/entities/label-case.entity';
import { CategoryType, Locale } from 'src/shared/enums';

registerEnumType(CategoryType, { name: 'CategoryType' });

@ObjectType()
export class Category {
    @Field(() => Int)
    id: number;

    @Field(() => CategoryType)
    type: CategoryType;

    @Field()
    slug: string;

    @Field()
    copyToKk: boolean;

    @Field()
    description: string;

    @Field(() => Locale)
    locale: Locale;

    @Field(() => Date)
    published_at: Date;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field(() => LabelCase)
    labelCases: LabelCase;

    // @Field(() => Program[])
    // programs: Program[];
}
