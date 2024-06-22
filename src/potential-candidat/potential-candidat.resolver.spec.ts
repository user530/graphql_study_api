import { Test, TestingModule } from '@nestjs/testing';
import { PotentialCandidatResolver } from './potential-candidat.resolver';

describe('PotentialCandidatResolver', () => {
  let resolver: PotentialCandidatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotentialCandidatResolver],
    }).compile();

    resolver = module.get<PotentialCandidatResolver>(PotentialCandidatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
