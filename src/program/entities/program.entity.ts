import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Category } from 'src/category/entities/category.entity';
import { Picture } from 'src/picture/entities';
import { Locale, StickerType, StudyFormat } from 'src/shared/enums';
import { StudyField } from 'src/study-field/entities/study-field.entity';
import { SubjectAddon } from 'src/subject-addon/entities/subject-addon.entity';

registerEnumType(StudyFormat, { name: 'StudyFormat' });
registerEnumType(StickerType, { name: 'StickerType' });

@ObjectType()
export class Program {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    slug: string;

    @Field({ nullable: true })
    showInMenu?: boolean;

    @Field(() => StudyFormat)
    studyFormat: StudyFormat;

    @Field()
    goal: string;

    @Field()
    description: string;

    @Field(() => GraphQLBigInt, { nullable: true })
    price?: bigint;

    @Field(() => Int, { nullable: true })
    discount?: number;

    @Field(() => StickerType, { nullable: true })
    subjectsStickerType?: StickerType;

    @Field({ nullable: true })
    copyToKk?: boolean;

    @Field(() => StudyField, { nullable: true })
    study_field?: StudyField;

    @Field(() => Category)
    category: Category;

    @Field({ nullable: true })
    icon?: string;

    @Field({ nullable: true })
    metaTitle?: string;

    @Field({ nullable: true })
    metaDescription?: string;

    @Field(() => Locale)
    locale: Locale;

    @Field(() => Date)
    published_at: Date;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field()
    isActive: boolean;

    @Field({ nullable: true })
    new?: boolean;

    @Field({ nullable: true })
    hit?: boolean;

    @Field({ nullable: true })
    frdo?: boolean;

    @Field({ nullable: true })
    employment?: boolean;

    @Field(() => SubjectAddon, { nullable: true })
    specializedSubjectsAddons?: SubjectAddon;

    @Field(() => Picture, { nullable: true })
    Picture?: Picture;
}