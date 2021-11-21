import { inject, injectable } from 'tsyringe';

import PcClass from '../infra/typeorm/entities/PcClass';
import IPcClassesRepository from '../repositories/IPcClassesRepository';

interface IRequest {
  name: string;
  description: string;
  hitDice: string;
  primaryAbility: string;
}

@injectable()
class CreatePcClassService {
  constructor(
    @inject('PcClassesRepository')
    private pcClasssRepository: IPcClassesRepository,
  ) {}

  public async execute({
    name,
    description,
    hitDice,
    primaryAbility,
  }: IRequest): Promise<PcClass> {
    const pcClass = await this.pcClasssRepository.create({
      name,
      description,
      hitDice,
      primaryAbility,
    });

    return pcClass;
  }
}

export default CreatePcClassService;
