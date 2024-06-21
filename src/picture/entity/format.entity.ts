import { Field, ObjectType } from '@nestjs/graphql';
import { IPictureFormat, IPictureFormats } from 'src/shared/interfaces';
import { PictureLike } from './picture-like.entity';

@ObjectType()
class PictureFormat extends PictureLike implements IPictureFormat {
    @Field({ nullable: true })
    path: string;
}

@ObjectType()
export class PictureFormats implements IPictureFormats {
    @Field(() => PictureFormat, { nullable: true })
    small?: PictureFormat;

    @Field(() => PictureFormat, { nullable: true })
    medium?: PictureFormat;

    @Field(() => PictureFormat, { nullable: true })
    large?: PictureFormat;

    @Field(() => PictureFormat, { nullable: true })
    thumbnail?: PictureFormat;
}