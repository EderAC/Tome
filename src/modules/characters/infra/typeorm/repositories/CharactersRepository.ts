import { getRepository, Repository } from 'typeorm';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

import ICreateCharacterDTO from '@modules/characters/dtos/ICreateCharacterDTO';
import Character from '../entities/Character';

class CharactersRepository implements ICharactersRepository {
  private ormRepository: Repository<Character>;

  constructor() {
    this.ormRepository = getRepository(Character);
  }

  public async create({
    level,
    name,
    pcClass,
    race,
  }: ICreateCharacterDTO): Promise<Character> {
    const character = this.ormRepository.create({ name, pcClass, level, race });

    await this.ormRepository.save(character);

    return character;
  }

  public async findAll(): Promise<Character[]> {
    const characters = await this.ormRepository.find();

    return characters;
  }
}

export default CharactersRepository;
