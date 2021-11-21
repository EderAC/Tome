/* eslint-disable @typescript-eslint/no-use-before-define */
import { Field, ObjectType } from 'type-graphql';
import { PcClass } from '../pc-classes/pc-class.types';

@ObjectType()
export class Spell {
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

  @Field(() => [PcClass])
  pcClasses: PcClass[];
}
