import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import { User } from './user.types';
import { GCtx } from '../context';
import { UserAuth } from './user-auth.types';

@InputType()
export class UserAuthInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  password: string;
}

@Resolver(() => UserAuth)
export default class UserAuthResolver {
  @Mutation(() => UserAuth)
  async userAuth(
    @Arg('userAuthInput') { name, password }: UserAuthInput,
    @Ctx() ctx: GCtx,
  ): Promise<UserAuth> {
    const authenticatedUser = await ctx.dataSources.userAuth.authenticateUser(
      name,
      password,
    );

    return authenticatedUser;
  }
}
