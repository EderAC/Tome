import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import { Character } from './character.types';
import { GCtx } from '../context';

@InputType()
export class CharacterInput implements Partial<Character> {
  @Field()
  name: string;

  @Field()
  pcClass: string;

  @Field()
  level: string;

  @Field()
  race: string;
}

@Resolver(() => Character)
export default class CharacterResolver {
  @Mutation(() => Character)
  async addCharacter(
    @Arg('characterInput') { name, pcClass, level, race }: CharacterInput,
    @Ctx() ctx: GCtx,
  ): Promise<Character> {
    const character = await ctx.dataSources.characters.create(
      name,
      pcClass,
      level,
      race,
    );

    return character;
  }
}
