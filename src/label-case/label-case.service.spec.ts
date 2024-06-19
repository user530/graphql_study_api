import { Test, TestingModule } from '@nestjs/testing';
import { LabelCaseService } from './label-case.service';

describe('LabelCaseService', () => {
  let service: LabelCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelCaseService],
    }).compile();

    service = module.get<LabelCaseService>(LabelCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
