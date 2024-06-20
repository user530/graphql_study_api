import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Resolver()
export class CategoryResolver {
    constructor(
        private readonly categoryService: CategoryService,
    ) { }

    @Query(() => [Category])
    async categories() {
        return this.categoryService.getCategories();
    }

    @Query(() => Category)
    async category(@Args('id', { type: () => Int }) id: number) {
        return this.categoryService.getCategory(id);
    }
}
