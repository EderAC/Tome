import { Characters } from './characters';
import { PcClasses } from './pc-classes';
import { Spells } from './spells';
import { Users } from './users';

export const createDataSources = () => {
  return {
    characters: new Characters(),
    pcClasses: new PcClasses(),
    spells: new Spells(),
    users: new Users(),
  };
};

export type DataSources = ReturnType<typeof createDataSources>;
