import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ActualInformation } from './entities/actual-information.entity';
import { ActualInformationService } from './actual-information.service';

@Resolver()
export class ActualInformationResolver {
    constructor(
        private readonly actualInformationService: ActualInformationService,
    ) { }

    @Query(() => [ActualInformation])
    async actualInformations() {
        return this.actualInformationService.getActualInformations();
    }

    @Query(() => ActualInformation)
    async actualInformation(@Args('id', { type: () => Int }) id: number) {
        return this.actualInformationService.getActualInformation(id);
    }
}
