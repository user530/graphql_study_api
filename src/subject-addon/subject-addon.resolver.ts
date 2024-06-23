import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { SubjectAddonService } from './subject-addon.service';
import { SubjectAddon } from './entities/subject-addon.entity';

@Resolver()
export class SubjectAddonResolver {
    constructor(
        private readonly subjectAddonService: SubjectAddonService,
    ) { }

    @Query(() => [SubjectAddon])
    async subjectAddons() {
        return this.subjectAddonService.getSubjectAddons();
    }

    @Query(() => SubjectAddon)
    async subjectAddon(@Args('id', { type: () => Int }) id: number) {
        return this.subjectAddonService.getSubjectAddon(id);
    }

}
