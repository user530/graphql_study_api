import { IResourceMetadata } from 'src/shared/interfaces';
import { ResourceType } from 'src/shared/enums';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

registerEnumType(ResourceType, { name: 'ResourceType' });

@ObjectType()
export class ResourceMetadata implements IResourceMetadata {
    @Field()
    public_id: string;

    @Field(() => ResourceType)
    resource_type: ResourceType;
}