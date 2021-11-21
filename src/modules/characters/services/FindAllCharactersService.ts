import { inject, injectable } from 'tsyringe';

import Character from '../infra/typeorm/entities/Character';
import ICharactersRepository from '../repositories/ICharactersRepository';

@injectable()
class FindAllCharacterService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute(): Promise<Character[]> {
    return this.charactersRepository.findAll();
  }
}

export default FindAllCharacterService;
