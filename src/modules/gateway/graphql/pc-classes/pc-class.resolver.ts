import { Resolver, Query, Ctx } from 'type-graphql';
import { GCtx } from '../context';
import { PcClass } from './pc-class.types';

@Resolver()
export default class PcClassResolver {
  @Query(() => [PcClass], { nullable: true })
  async getPcClasses(@Ctx() ctx: GCtx): Promise<PcClass[]> {
    const pcClasses = await ctx.dataSources.pcClasses.findAll();
    return pcClasses;
  }
}
