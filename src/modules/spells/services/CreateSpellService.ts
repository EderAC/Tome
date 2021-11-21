import { inject, injectable } from 'tsyringe';

import Spell from '../infra/typeorm/entities/Spell';
import ISpellsRepository from '../repositories/ISpellsRepository';
import ICreateSpellDTO from '../dtos/ICreateSpellDTO';

@injectable()
class CreateSpellService {
  constructor(
    @inject('SpellsRepository')
    private spellRepository: ISpellsRepository,
  ) {}

  public async execute({
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
    const spell = await this.spellRepository.create({
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
    });

    return spell;
  }
}

export default CreateSpellService;
