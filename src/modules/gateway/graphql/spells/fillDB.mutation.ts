import { Resolver, Mutation, Ctx } from 'type-graphql';
import { Spell } from './spell.types';
import { GCtx } from '../context';

@Resolver(() => Spell)
export default class SpellResolver {
  @Mutation(() => Spell)
  async fillDB(@Ctx() ctx: GCtx): Promise<void> {
    await ctx.dataSources.spells.fillDb();
  }
}
