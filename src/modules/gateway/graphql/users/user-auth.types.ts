import { Field, ObjectType } from 'type-graphql';
import { User } from './user.types';

@ObjectType()
export class UserAuth {
  @Field()
  token!: string;

  @Field(() => User)
  user!: User;
}
