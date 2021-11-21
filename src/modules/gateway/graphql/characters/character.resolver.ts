import { Resolver, Query, Ctx } from 'type-graphql';
import { GCtx } from '../context';
import { Character } from './character.types';

@Resolver()
export default class CharacterResolver {
  @Query(() => [Character], { nullable: true })
  async getCharacters(@Ctx() ctx: GCtx): Promise<Character[]> {
    const characters = await ctx.dataSources.characters.findAll();
    return characters;
  }
}
