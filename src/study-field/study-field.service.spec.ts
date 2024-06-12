import { Test, TestingModule } from '@nestjs/testing';
import { StudyFieldService } from './study-field.service';

describe('StudyFieldService', () => {
  let service: StudyFieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyFieldService],
    }).compile();

    service = module.get<StudyFieldService>(StudyFieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
