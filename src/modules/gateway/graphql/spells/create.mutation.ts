import { Resolver, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import { Spell } from './spell.types';
import { GCtx } from '../context';

@InputType()
export class SpellInput {
  @Field()
  name: string;

  @Field()
  school: string;

  @Field()
  level: string;

  @Field()
  cast: string;

  @Field()
  range: string;

  @Field()
  component: string;

  @Field()
  duration: string;

  @Field()
  material: string;

  @Field()
  description: string;

  @Field(() => [String])
  pcClasses: string[];
}

@Resolver(() => Spell)
export default class SpellResolver {
  @Mutation(() => Spell)
  async addSpell(
    @Arg('spellInput') input: SpellInput,
    @Ctx() ctx: GCtx,
  ): Promise<Spell> {
    const spell = await ctx.dataSources.spells.create(input);

    return spell;
  }
}
