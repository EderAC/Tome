import { Resolver, Query, Ctx, Arg } from 'type-graphql';
import { GCtx } from '../context';
import { User } from './user.types';

@Resolver()
export default class UserResolver {
  @Query(() => [User], { nullable: true })
  async getUsers(@Ctx() ctx: GCtx): Promise<User[]> {
    const users = await ctx.dataSources.users.findAll();
    return users;
  }

  @Query(() => User, { nullable: true })
  async userByName(
    @Arg('name', () => String)
    name: string,
    @Ctx()
    ctx: GCtx,
  ): Promise<User | undefined> {
    const user = await ctx.dataSources.users.findUserByName(name);
    return user;
  }
}
