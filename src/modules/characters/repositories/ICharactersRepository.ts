import ICreateCharacterDTO from '../dtos/ICreateCharacterDTO';
import Character from '../infra/typeorm/entities/Character';

export default interface ICharactersRepository {
  create(data: ICreateCharacterDTO): Promise<Character>;
  findAll(): Promise<Character[]>;
}
