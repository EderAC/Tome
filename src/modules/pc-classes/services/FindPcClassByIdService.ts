import { inject, injectable } from 'tsyringe';

import PcClass from '../infra/typeorm/entities/PcClass';
import IPcClassesRepository from '../repositories/IPcClassesRepository';

@injectable()
class FindPcClassByIdService {
  constructor(
    @inject('PcClassesRepository')
    private pcClassesRepository: IPcClassesRepository,
  ) {}

  public async execute(id: string): Promise<PcClass | undefined> {
    return this.pcClassesRepository.findById(id);
  }
}

export default FindPcClassByIdService;
