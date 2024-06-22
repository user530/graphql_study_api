import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PotentialCandidatService } from './potential-candidat.service';
import { PotentialCandidat } from './entities/potential-candidat.entity';

@Resolver()
export class PotentialCandidatResolver {
    constructor(
        private readonly potentialCandidatService: PotentialCandidatService,
    ) { }

    @Query(() => [PotentialCandidat])
    async potentialCandidats() {
        return this.potentialCandidatService.getPotentialCandidates();
    }

    @Query(() => PotentialCandidat)
    async potentialCandidat(@Args('id', { type: () => Int }) id: number) {
        return this.potentialCandidatService.getPotentialCandidat(id);
    }
}

