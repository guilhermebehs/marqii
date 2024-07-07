import { Test, TestingModule } from '@nestjs/testing';
import { ExampleService } from './example.service';
import { ExampleRepository } from 'src/infra/db/repositories/example.repository';
import { ExampleEntity } from 'src/infra/db/entities/example.entity';
import { BadRequestException } from '@nestjs/common';

describe('ExampleService', () => {
  let service: ExampleService;
  let repositoryMock: ExampleRepository;
  const exampleEntityMock: ExampleEntity = {
    id: 1,
    name: 'some example',
    birth: new Date().toISOString(),
    childs: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExampleService,
        {
          provide: ExampleRepository,
          useValue: {
            find: jest.fn().mockResolvedValue([exampleEntityMock]),
            save: jest.fn().mockResolvedValue({ id: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<ExampleService>(ExampleService);
    repositoryMock = module.get(ExampleRepository);
  });

  describe('list', () => {
    it('should list all examples', async () => {
      await expect(service.list()).resolves.toEqual([
        {
          ...exampleEntityMock,
        },
      ]);
      expect(repositoryMock.find).toHaveBeenCalledTimes(1);
      expect(repositoryMock.find).toHaveBeenCalledWith();
    });
  });
  describe('create', () => {
    it('should create example', async () => {
      const dto = {
        name: 'some example',
        birth: new Date().toISOString(),
      };

      await expect(service.create(dto)).resolves.toEqual({ id: 1 });
      expect(repositoryMock.save).toHaveBeenCalledTimes(1);
      expect(repositoryMock.save).toHaveBeenCalledWith(dto);
    });
    it('should throw when name is not sent', async () => {
      const dto = {
        birth: new Date().toISOString(),
      } as any;

      await expect(service.create(dto)).rejects.toEqual(
        new BadRequestException('"name" is required'),
      );
      expect(repositoryMock.save).not.toHaveBeenCalled();
    });
    it('should throw when birth is not sent', async () => {
      const dto = {
        name: 'some example',
      } as any;

      await expect(service.create(dto)).rejects.toEqual(
        new BadRequestException('"birth" is required'),
      );
      expect(repositoryMock.save).not.toHaveBeenCalled();
    });
  });
});
