import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PcClass {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  hitDice!: string;

  @Field()
  primaryAbility!: string;
}
