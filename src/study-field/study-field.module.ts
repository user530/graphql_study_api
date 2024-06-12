import { Module } from '@nestjs/common';
import { StudyFieldResolver } from './study-field.resolver';
import { StudyFieldService } from './study-field.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StudyFieldResolver, StudyFieldService]
})
export class StudyFieldModule { }
