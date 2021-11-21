import { container } from 'tsyringe';
import { DataSource } from 'apollo-datasource';

import CreateSpellService from '@modules/spells/services/CreateSpellService';
import FindAllSpellsService from '@modules/spells/services/FindAllSpellsService';
import FindSpellByIdService from '@modules/spells/services/FindSpellByIdService';
import findSpellsByClassIdService from '@modules/spells/services/FindSpellByClassId';
import { GCtx } from '../graphql/context';

interface IRequest {
  name: string;
  school: string;
  level: string;
  cast: string;
  range: string;
  component: string;
  duration: string;
  material: string;
  description: string;
  pcClasses: string[];
}

export class Spells extends DataSource<GCtx> {
  async create({
    name,
    school,
    level,
    cast,
    range,
    component,
    duration,
    material,
    description,
    pcClasses,
  }: IRequest) {
    const createSpell = container.resolve(CreateSpellService);
    const spell = await createSpell.execute({
      name,
      school,
      level,
      cast,
      range,
      component,
      duration,
      material,
      description,
      pcClasses,
    });
    return spell;
  }

  public async findAll() {
    const findAllSpells = container.resolve(FindAllSpellsService);
    const spells = await findAllSpells.execute();
    return spells;
  }

  public async findById(id: string) {
    const findSpellById = container.resolve(FindSpellByIdService);
    const spell = await findSpellById.execute(id);
    return spell;
  }

  public async findSpellsByClassId(classId: string) {
    const findSpellsByClassId = container.resolve(findSpellsByClassIdService);
    const spells = await findSpellsByClassId.execute(classId);
    return spells;
  }
}
