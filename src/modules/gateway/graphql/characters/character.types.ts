import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Character {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  pcClass!: string;

  @Field()
  level!: string;

  @Field()
  race!: string;
}
