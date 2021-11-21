import { Resolver, Query, Ctx, ID, Arg } from 'type-graphql';
import { GCtx } from '../context';
import { Spell } from './spell.types';

@Resolver()
export default class SpellResolver {
  @Query(() => [Spell], { nullable: true })
  async getSpells(@Ctx() ctx: GCtx): Promise<Spell[]> {
    const spells = await ctx.dataSources.spells.findAll();
    return spells;
  }

  @Query(() => Spell, { nullable: true })
  async spell(
    @Arg('id', () => ID)
    id: string,
    @Ctx()
    ctx: GCtx,
  ): Promise<Spell | undefined> {
    const spell = await ctx.dataSources.spells.findById(id);
    return spell;
  }
}
