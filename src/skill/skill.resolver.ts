import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { Skill } from './entities/skill.entity';

@Resolver()
export class SkillResolver {
    constructor(
        private readonly skillService: SkillService,
    ) { }

    @Query(() => [Skill])
    async skills() {
        return this.skillService.getSkills();
    }

    @Query(() => Skill)
    async skill(@Args('id', { type: () => Int }) id: number) {
        return this.skillService.getSkill(id);
    }
}
