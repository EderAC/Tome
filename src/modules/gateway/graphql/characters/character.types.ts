import { Field, ObjectType } from 'type-graphql';
import { User } from '../users/user.types';

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

  @Field(() => User)
  user!: User;
}
