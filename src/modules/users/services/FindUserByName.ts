import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
}

@injectable()
class FindUserByNameService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<User | undefined> {
    return this.usersRepository.findByName(name);
  }
}

export default FindUserByNameService;
