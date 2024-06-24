import { Module } from '@nestjs/common';
import { ActualInformationService } from './actual-information.service';
import { ActualInformationResolver } from './actual-information.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ActualInformationService, ActualInformationResolver]
})
export class ActualInformationModule { }
