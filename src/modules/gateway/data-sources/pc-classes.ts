import { container } from 'tsyringe';
import { DataSource } from 'apollo-datasource';

import CreatePcClassService from '@modules/pc-classes/services/CreatePcClassService';
// import FindAllPcClassesService from '@modules/pc-classes/services/FindAllPcClassesService';
import { GCtx } from '../graphql/context';

export class PcClasses extends DataSource<GCtx> {
  async create(
    name: string,
    description: string,
    hitDice: string,
    primaryAbility: string,
  ) {
    const createPcClass = container.resolve(CreatePcClassService);

    const pcClass = await createPcClass.execute({
      name,
      description,
      hitDice,
      primaryAbility,
    });
    return pcClass;
  }

  // public async findAll() {
  //   const findAllPcClasses = container.resolve(FindAllPcClassesService);
  //   const pcClasss = await findAllPcClasses.execute();
  //   return pcClasss;
  // }
}
