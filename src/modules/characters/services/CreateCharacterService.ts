import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import Character from '../infra/typeorm/entities/Character';
import ICharactersRepository from '../repositories/ICharactersRepository';

interface IRequest {
  name: string;
  pcClass: string;
  level: string;
  race: string;
  user_id: string;
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
    user_id,
  }: IRequest): Promise<Character> {
    const checkCharacterExists = await this.charactersRepository.findByName(
      name,
      user_id,
    );

    if (checkCharacterExists) {
      throw new AppError('You already have a character with this name.');
    }

    const character = await this.charactersRepository.create({
      name,
      pcClass,
      level,
      race,
      user_id,
    });

    return character;
  }
}

export default CreateCharacterService;
