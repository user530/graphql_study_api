import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';

@Resolver()
export class ProgramResolver {
    constructor(
        private readonly programService: ProgramService,
    ) { }

    @Query(() => [Program])
    async programs() {
        return this.programService.getPrograms();
    }

    @Query(() => Program)
    async program(@Args('id', { type: () => Int }) id: number) {
        return this.programService.getProgram(id);
    }
}
