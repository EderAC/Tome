import { Characters } from './characters';
import { PcClasses } from './pc-classes';
import { Spells } from './spells';

export const createDataSources = () => {
  return {
    characters: new Characters(),
    pcClasses: new PcClasses(),
    spells: new Spells(),
  };
};

export type DataSources = ReturnType<typeof createDataSources>;
