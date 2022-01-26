import { Characters } from './characters';
import { PcClasses } from './pc-classes';
import { Spells } from './spells';
import { Users } from './users';
import { UserAuth } from './user-auth';

export const createDataSources = () => {
  return {
    characters: new Characters(),
    pcClasses: new PcClasses(),
    spells: new Spells(),
    users: new Users(),
    userAuth: new UserAuth(),
  };
};

export type DataSources = ReturnType<typeof createDataSources>;
