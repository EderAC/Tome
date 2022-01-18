import ICreateUserDTO from '../dtos/ICreateCharacterDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findByName(name: string): Promise<User | undefined>;
}
