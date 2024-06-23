import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { HeroAdvantageService } from './hero-advantage.service';
import { HeroAdvantage } from './entities/hero-advantage.entity';

@Resolver()
export class HeroAdvantageResolver {
    constructor(
        private readonly heroAdvantageService: HeroAdvantageService,
    ) { }

    @Query(() => [HeroAdvantage])
    async heroAdvantages() {
        return this.heroAdvantageService.getHeroAdvantages();
    }

    @Query(() => HeroAdvantage)
    async heroAdvantage(@Args('id', { type: () => Int }) id: number) {
        return this.heroAdvantageService.getHeroAdvantage(id);
    }
}
