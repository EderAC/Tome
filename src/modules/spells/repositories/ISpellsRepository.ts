import ICreateSpellDTO from '../dtos/ICreateSpellDTO';
import Spell from '../infra/typeorm/entities/Spell';

export default interface ISpellsRepository {
  create(data: ICreateSpellDTO): Promise<Spell>;
  findAll(): Promise<Spell[]>;
  findById(id: string): Promise<Spell | undefined>;
  // findSpellsByClassId(classId: string): Promise<Spell[]>;
}
