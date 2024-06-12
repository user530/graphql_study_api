import { Test, TestingModule } from '@nestjs/testing';
import { StudyFieldResolver } from './study-field.resolver';

describe('StudyFieldResolver', () => {
  let resolver: StudyFieldResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyFieldResolver],
    }).compile();

    resolver = module.get<StudyFieldResolver>(StudyFieldResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
