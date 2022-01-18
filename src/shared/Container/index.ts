import { container } from 'tsyringe';

import '@modules/users/providers';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import CharactersRepository from '@modules/characters/infra/typeorm/repositories/CharactersRepository';

import IPcClassesRepository from '@modules/pc-classes/repositories/IPcClassesRepository';
import PcClassesRepository from '@modules/pc-classes/infra/typeorm/repositories/PcClassesRepository';

import ISpellsRepository from '@modules/spells/repositories/ISpellsRepository';
import SpellsRepository from '@modules/spells/infra/typeorm/repositories/SpellsRepository';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRespository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

container.registerSingleton<ICharactersRepository>(
  'CharactersRepository',
  CharactersRepository,
);

container.registerSingleton<IPcClassesRepository>(
  'PcClassesRepository',
  PcClassesRepository,
);

container.registerSingleton<ISpellsRepository>(
  'SpellsRepository',
  SpellsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
