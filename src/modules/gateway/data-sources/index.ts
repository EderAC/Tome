import { Characters } from './characters';

export const createDataSources = () => {
  return {
    characters: new Characters(),
  };
};

export type DataSources = ReturnType<typeof createDataSources>;
