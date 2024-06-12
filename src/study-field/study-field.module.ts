import { Module } from '@nestjs/common';
import { StudyFieldResolver } from './study-field.resolver';
import { StudyFieldService } from './study-field.service';

@Module({
  providers: [StudyFieldResolver, StudyFieldService]
})
export class StudyFieldModule {}
