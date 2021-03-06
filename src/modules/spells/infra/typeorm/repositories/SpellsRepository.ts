import { getRepository, In, Repository } from 'typeorm';

import ISpellsRepository from '@modules/spells/repositories/ISpellsRepository';

import ICreateSpellDTO from '@modules/spells/dtos/ICreateSpellDTO';
import PcClass from '@modules/pc-classes/infra/typeorm/entities/PcClass';
import Spell from '../entities/Spell';

class SpellsRepository implements ISpellsRepository {
  private ormRepository: Repository<Spell>;

  private ormPcClassRepository: Repository<PcClass>;

  constructor() {
    this.ormRepository = getRepository(Spell);
    this.ormPcClassRepository = getRepository(PcClass);
  }

  public async create({
    name,
    school,
    level,
    cast,
    range,
    component,
    duration,
    material,
    description,
    pcClasses,
  }: ICreateSpellDTO): Promise<Spell> {
    const foundPcClasses = await this.ormPcClassRepository.find({
      name: In(pcClasses),
    });
    const spell = this.ormRepository.create({
      name,
      school,
      level,
      cast,
      range,
      component,
      duration,
      material,
      description,
      pcClasses: foundPcClasses,
    });

    await this.ormRepository.save(spell);

    return spell;
  }

  public async findAll(): Promise<Spell[]> {
    const spells = await this.ormRepository.find({
      relations: ['pcClasses'],
    });

    return spells;
  }

  public async findById(id: string): Promise<Spell | undefined> {
    const spell = await this.ormRepository.findOne({
      where: { id },
      relations: ['pcClasses'],
    });

    return spell;
  }

  public async findSpellsByClassId(classId: string): Promise<Spell[]> {
    const spell = await this.ormRepository
      .createQueryBuilder('spells')
      .innerJoinAndSelect('spells.pcClasses', 'pcClasses')
      .where('pcClasses.id = :classId', { classId })
      .orderBy('spells.level', 'ASC')
      .addOrderBy('spells.name', 'ASC')
      .getMany();

    return spell;
  }
}

export default SpellsRepository;
