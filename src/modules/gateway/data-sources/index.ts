import { Characters } from './characters';
import { PcClasses } from './pc-classes';

export const createDataSources = () => {
  return {
    characters: new Characters(),
    pcClasses: new PcClasses(),
  };
};

export type DataSources = ReturnType<typeof createDataSources>;
