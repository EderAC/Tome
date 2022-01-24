import { inject, injectable } from 'tsyringe';

import { SpellSeed } from '@shared/infra/typeorm/seeds/spells.seeder';
import ISpellsRepository from '../repositories/ISpellsRepository';

@injectable()
class FillDBService {
  constructor(
    @inject('SpellsRepository')
    private spellRepository: ISpellsRepository,
  ) {}

  public async execute(): Promise<void> {
    const spellsList = SpellSeed;

    spellsList.map(spell => this.spellRepository.create(spell));
  }
}

export default FillDBService;
