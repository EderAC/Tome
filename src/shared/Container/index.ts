import { container } from 'tsyringe';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import CharactersRepository from '@modules/characters/infra/typeorm/repositories/CharactersRepository';
import IPcClassesRepository from '@modules/pc-classes/repositories/IPcClassesRepository';
import PcClassesRepository from '@modules/pc-classes/infra/typeorm/repositories/PcClassesRepository';

container.registerSingleton<ICharactersRepository>(
  'CharactersRepository',
  CharactersRepository,
);

container.registerSingleton<IPcClassesRepository>(
  'PcClassesRepository',
  PcClassesRepository,
);