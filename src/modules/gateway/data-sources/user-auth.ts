import { container } from 'tsyringe';
import { DataSource } from 'apollo-datasource';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { GCtx } from '../graphql/context';

export class UserAuth extends DataSource<GCtx> {
  async authenticateUser(name: string, password: string) {
    const authUser = container.resolve(AuthenticateUserService);

    const authenticatedUser = await authUser.execute({
      name,
      password,
    });

    return authenticatedUser;
  }
}
