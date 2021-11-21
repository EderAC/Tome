import { inject, injectable } from 'tsyringe';

import Spell from '../infra/typeorm/entities/Spell';
import ISpellsRepository from '../repositories/ISpellsRepository';

@injectable()
class FindSpellByIdService {
  constructor(
    @inject('SpellsRepository')
    private spellsRepository: ISpellsRepository,
  ) {}

  public async execute(id: string): Promise<Spell | undefined> {
    return this.spellsRepository.findById(id);
  }
}

export default FindSpellByIdService;
