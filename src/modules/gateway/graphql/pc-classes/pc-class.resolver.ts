import { Resolver, Query, Ctx, Arg, ID } from 'type-graphql';
import { GCtx } from '../context';
import { PcClass } from './pc-class.types';

@Resolver()
export default class PcClassResolver {
  @Query(() => [PcClass], { nullable: true })
  async getPcClasses(@Ctx() ctx: GCtx): Promise<PcClass[]> {
    const pcClasses = await ctx.dataSources.pcClasses.findAll();
    return pcClasses;
  }

  @Query(() => PcClass, { nullable: true })
  async pcClass(
    @Arg('id', () => ID)
    id: string,
    @Ctx()
    ctx: GCtx,
  ): Promise<PcClass | undefined> {
    const pcClass = await ctx.dataSources.pcClasses.findById(id);
    console.log(pcClass);
    return pcClass;
  }
}
