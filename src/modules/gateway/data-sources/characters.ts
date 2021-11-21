import { container } from 'tsyringe';
import { DataSource } from 'apollo-datasource';

import CreateCharacterService from '@modules/characters/services/CreateCharacterService';
import FindAllCharactersService from '@modules/characters/services/FindAllCharactersService';
import { GCtx } from '../graphql/context';

export class Characters extends DataSource<GCtx> {
  async create(name: string, pcClass: string, level: string, race: string) {
    const createCharacter = container.resolve(CreateCharacterService);
    const character = await createCharacter.execute({
      name,
      pcClass,
      level,
      race,
    });
    return character;
  }

  public async findAll() {
    const findAllCharacters = container.resolve(FindAllCharactersService);
    const characters = await findAllCharacters.execute();
    return characters;
  }
}
