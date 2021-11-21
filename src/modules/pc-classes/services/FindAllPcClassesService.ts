import { inject, injectable } from 'tsyringe';

import PcClass from '../infra/typeorm/entities/PcClass';
import IPcClassesRepository from '../repositories/IPcClassesRepository';

@injectable()
class FindAllPcClassService {
  constructor(
    @inject('PcClassesRepository')
    private pcClassRepository: IPcClassesRepository,
  ) {}

  public async execute(): Promise<PcClass[]> {
    return this.pcClassRepository.findAll();
  }
}

export default FindAllPcClassService;
