import { container } from 'tsyringe';
import { DataSource } from 'apollo-datasource';

import CreateUserService from '@modules/users/services/CreateUserService';
import FindAllUsersService from '@modules/users/services/FindAllUsersService';
import FindUserByNameService from '@modules/users/services/FindUserByName';
import { GCtx } from '../graphql/context';

export class Users extends DataSource<GCtx> {
  async create(name: string, password: string) {
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      password,
    });

    return user;
  }

  public async findAll() {
    const findAllUsers = container.resolve(FindAllUsersService);
    const users = await findAllUsers.execute();
    return users;
  }

  public async findUserByName(name: string) {
    const findUserByName = container.resolve(FindUserByNameService);
    const user = await findUserByName.execute({ name });
    return user;
  }
}
