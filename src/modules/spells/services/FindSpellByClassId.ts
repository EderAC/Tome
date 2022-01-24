import { inject, injectable } from 'tsyringe';

import Spell from '../infra/typeorm/entities/Spell';
import ISpellsRepository from '../repositories/ISpellsRepository';

@injectable()
class FindSpellsByClassIdService {
  constructor(
    @inject('SpellsRepository')
    private spellsRepository: ISpellsRepository,
  ) {}

  public async execute(classId: string): Promise<Spell[]> {
    return this.spellsRepository.findSpellsByClassId(classId);
  }
}

export default FindSpellsByClassIdService;
