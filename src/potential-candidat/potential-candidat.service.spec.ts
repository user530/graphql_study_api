import { Test, TestingModule } from '@nestjs/testing';
import { PotentialCandidatService } from './potential-candidat.service';

describe('PotentialCandidatService', () => {
  let service: PotentialCandidatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotentialCandidatService],
    }).compile();

    service = module.get<PotentialCandidatService>(PotentialCandidatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
