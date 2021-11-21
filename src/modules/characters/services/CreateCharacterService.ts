import { inject, injectable } from 'tsyringe';

import Character from '../infra/typeorm/entities/Character';
import ICharactersRepository from '../repositories/ICharactersRepository';

interface IRequest {
  name: string;
  pcClass: string;
  level: string;
  race: string;
}

@injectable()
class CreateCharacterService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute({
    name,
    pcClass,
    level,
    race,
  }: IRequest): Promise<Character> {
    const character = await this.charactersRepository.create({
      name,
      pcClass,
      level,
      race,
    });

    return character;
  }
}

export default CreateCharacterService;
