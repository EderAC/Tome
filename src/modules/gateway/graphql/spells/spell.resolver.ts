import { Resolver, Query, Ctx } from 'type-graphql';
import { GCtx } from '../context';
import { Spell } from './spell.types';

@Resolver()
export default class SpellResolver {
  @Query(() => [Spell], { nullable: true })
  async getSpells(@Ctx() ctx: GCtx): Promise<Spell[]> {
    const spells = await ctx.dataSources.spells.findAll();
    return spells;
  }
}
