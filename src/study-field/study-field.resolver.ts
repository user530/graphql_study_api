import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { StudyField } from './entities/study-field.entity';
import { StudyFieldService } from './study-field.service';

@Resolver(() => StudyField)
export class StudyFieldResolver {

    constructor(
        private readonly studyFieldService: StudyFieldService
    ) { }

    @Query(() => [StudyField])
    async studyFields() {
        return this.studyFieldService.getStudyFields();
    }

    @Query(() => StudyField, { nullable: true })
    async studyField(@Args('id', { type: () => Int }) id: number) {
        return this.studyFieldService.getStudyField(id);
    }

}
