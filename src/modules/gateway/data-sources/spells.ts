import { container } from 'tsyringe';
import { DataSource } from 'apollo-datasource';

import CreateSpellService from '@modules/spells/services/CreateSpellService';
import FindAllSpellsService from '@modules/spells/services/FindAllSpellsService';
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
}
