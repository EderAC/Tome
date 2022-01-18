import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import { User } from './user.types';
import { GCtx } from '../context';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  password: string;
}

@Resolver(() => User)
export default class UserResolver {
  @Mutation(() => User)
  async addUser(
    @Arg('userInput') { name, password }: UserInput,
    @Ctx() ctx: GCtx,
  ): Promise<User> {
    const user = await ctx.dataSources.users.create(name, password);

    return user;
  }
}
