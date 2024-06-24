import { Test, TestingModule } from '@nestjs/testing';
import { ActualInformationResolver } from './actual-information.resolver';

describe('ActualInformationResolver', () => {
  let resolver: ActualInformationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActualInformationResolver],
    }).compile();

    resolver = module.get<ActualInformationResolver>(ActualInformationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
