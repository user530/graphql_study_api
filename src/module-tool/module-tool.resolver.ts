import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ModuleToolService } from './module-tool.service';
import { ModuleTool } from './entities/module-tool.entities';

@Resolver()
export class ModuleToolResolver {
    constructor(
        private readonly moduleToolService: ModuleToolService,
    ) { }

    @Query(() => [ModuleTool])
    async moduleTools() {
        return this.moduleToolService.getModuleTools();
    }

    @Query(() => ModuleTool)
    async moduleTool(@Args('id', { type: () => Int }) id: number) {
        return this.moduleToolService.getModuleTool(id);
    }
}
