import {
  Resolver,
  Mutation,
  Arg,
  InputType,
  Field,
  Ctx,
  ObjectType,
} from 'type-graphql';
import { Character } from './character.types';
import { GCtx } from '../context';

@InputType()
class CharacterInput implements Partial<Character> {
  @Field()
  name: string;

  @Field()
  pcClass: string;

  @Field()
  level: string;

  @Field()
  race: string;

  @Field()
  user_id: string;
}

@ObjectType()
class characterPayload {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  pcClass: string;

  @Field()
  level: string;

  @Field()
  race: string;
}

@Resolver()
export default class CharacterResolver {
  @Mutation(() => characterPayload)
  async addCharacter(
    @Arg('characterInput')
    { name, pcClass, level, race, user_id }: CharacterInput,
    @Ctx() ctx: GCtx,
  ): Promise<characterPayload> {
    const character = await ctx.dataSources.characters.create(
      name,
      pcClass,
      level,
      race,
      user_id,
    );

    return character;
  }
}
