import { inject, injectable } from 'tsyringe';

import Spell from '../infra/typeorm/entities/Spell';
import ISpellsRepository from '../repositories/ISpellsRepository';

@injectable()
class FindAllSpellService {
  constructor(
    @inject('SpellsRepository')
    private spellsRepository: ISpellsRepository,
  ) {}

  public async execute(): Promise<Spell[]> {
    return this.spellsRepository.findAll();
  }
}

export default FindAllSpellService;
