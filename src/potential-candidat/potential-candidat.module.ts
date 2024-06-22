import { Module } from '@nestjs/common';
import { PotentialCandidatService } from './potential-candidat.service';
import { PotentialCandidatResolver } from './potential-candidat.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PotentialCandidatService, PotentialCandidatResolver]
})
export class PotentialCandidatModule { }
