import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IPicture } from '../../shared/interfaces';
import { PictureLike, PictureFormats } from './index';

@ObjectType()
export class Picture extends PictureLike implements IPicture {
    @Field(() => Int)
    id: number;

    @Field()
    alternativeText: string;

    @Field()
    caption: string;

    @Field(() => PictureFormats)
    formats: PictureFormats;

    @Field()
    provider: string;

    @Field({ nullable: true })
    previewUrl?: string;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;
}