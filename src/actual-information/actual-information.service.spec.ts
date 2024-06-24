import { Test, TestingModule } from '@nestjs/testing';
import { ActualInformationService } from './actual-information.service';

describe('ActualInformationService', () => {
  let service: ActualInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActualInformationService],
    }).compile();

    service = module.get<ActualInformationService>(ActualInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
