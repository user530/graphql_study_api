import { Module } from '@nestjs/common';
import { SubjectAddonService } from './subject-addon.service';
import { SubjectAddonResolver } from './subject-addon.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SubjectAddonService, SubjectAddonResolver]
})
export class SubjectAddonModule { }
