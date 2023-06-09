import { Test, TestingModule } from '@nestjs/testing';
import { InstructorResolver } from './instructor.resolver';
import { InstructorService } from './instructor.service';

describe('InstructorResolver', () => {
  let resolver: InstructorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorResolver, InstructorService],
    }).compile();

    resolver = module.get<InstructorResolver>(InstructorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
