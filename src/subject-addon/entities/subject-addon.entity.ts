import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubjectAddon {
    @Field(() => Int)
    id: number;

    @Field()
    Practice: boolean;

    @Field({ nullable: true })
    diplomaProtection: boolean;

    @Field({ nullable: true })
    OfflineModule: boolean;
}