import { Args, Int, Resolver } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { Query } from '@nestjs/graphql';
import { Subject } from './entities/subject.entity';

@Resolver()
export class SubjectResolver {
    constructor(
        private readonly subjectService: SubjectService,
    ) { }

    @Query(() => [Subject])
    async subjects() {
        return this.subjectService.subjectServices();
    }

    @Query(() => Subject)
    async subject(@Args('id', { type: () => Int }) id: number) {
        return this.subjectService.subjectService(id);
    }
}
