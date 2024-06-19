import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { LabelCase } from './entities/label-case.entity';
import { LabelCaseService } from './label-case.service';

@Resolver(() => LabelCase)
export class LabelCaseResolver {
    constructor(
        private readonly labelCaseService: LabelCaseService,
    ) { }

    @Query(() => [LabelCase])
    async labelCases() {
        return this.labelCaseService.getLabelCases();
    }

    @Query(() => LabelCase)
    async labelCase(@Args('id', { type: () => Int }) id: number) {
        return this.labelCaseService.getLabelCase(id);
    }
}
