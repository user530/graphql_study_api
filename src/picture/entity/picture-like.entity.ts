import { Field, Float, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IPictureLike } from '../../shared/interfaces';
import { Extension, MimeType } from 'src/shared/enums';
import { ResourceMetadata } from './resource-metadata.entity';

registerEnumType(Extension, { name: 'Extension' });
registerEnumType(MimeType, { name: 'MimeType' });

@ObjectType()
export abstract class PictureLike implements IPictureLike {
    @Field()
    name: string;

    @Field(() => Int)
    width: number;

    @Field(() => Int)
    height: number;

    @Field()
    hash: string;

    @Field(() => Extension)
    ext: Extension;

    @Field(() => MimeType)
    mime: MimeType;

    @Field(() => Float)
    size: number;

    @Field()
    url: string;

    @Field(() => ResourceMetadata)
    provider_metadata: ResourceMetadata;
}