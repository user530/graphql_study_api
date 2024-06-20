import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';

@ObjectType()
export class LabelCase {
    @Field(() => Int)
    id: number;

    @Field()
    singular: string;

    @Field()
    plural: string;

    @Field(() => [Category])
    categories: Category[];
}