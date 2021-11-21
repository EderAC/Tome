import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import { PcClass } from './pc-class.types';
import { GCtx } from '../context';

@InputType()
export class PcClassInput implements Partial<PcClass> {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  hitDice: string;

  @Field()
  primaryAbility: string;
}

@Resolver(() => PcClass)
export default class PcClassResolver {
  @Mutation(() => PcClass)
  async addPcClass(
    @Arg('pcClassInput')
    { name, description, hitDice, primaryAbility }: PcClassInput,
    @Ctx() ctx: GCtx,
  ): Promise<PcClass> {
    const pcClass = await ctx.dataSources.pcClasses.create(
      name,
      description,
      hitDice,
      primaryAbility,
    );

    return pcClass;
  }
}
