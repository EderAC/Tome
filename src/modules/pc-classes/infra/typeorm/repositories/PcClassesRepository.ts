import { getRepository, Repository } from 'typeorm';

import IPcClassesRepository from '@modules/pc-classes/repositories/IPcClassesRepository';

import ICreatePcClassDTO from '@modules/pc-classes/dtos/ICreatePcClassDTO';
import PcClass from '../entities/PcClass';

class PcClassesRepository implements IPcClassesRepository {
  private ormRepository: Repository<PcClass>;

  constructor() {
    this.ormRepository = getRepository(PcClass);
  }

  public async create({
    name,
    description,
    hitDice,
    primaryAbility,
  }: ICreatePcClassDTO): Promise<PcClass> {
    const pcClass = this.ormRepository.create({
      name,
      description,
      hitDice,
      primaryAbility,
    });

    await this.ormRepository.save(pcClass);

    return pcClass;
  }

  public async findAll(): Promise<PcClass[]> {
    const pcClasses = await this.ormRepository.find();

    return pcClasses;
  }

  public async findById(id: string): Promise<PcClass | undefined> {
    const pcClass = await this.ormRepository.findOne({ where: { id } });

    return pcClass;
  }
}

export default PcClassesRepository;
