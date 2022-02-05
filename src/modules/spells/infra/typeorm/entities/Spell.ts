import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import PcClass from '../../../../pc-classes/infra/typeorm/entities/PcClass';

@Entity('spells')
class Spell {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  school: string;

  @Column()
  level: string;

  @Column()
  cast: string;

  @Column()
  range: string;

  @Column()
  component: string;

  @Column()
  duration: string;

  @Column()
  material: string;

  @Column()
  description: string;

  @ManyToMany(() => PcClass)
  @JoinTable()
  pcClasses: PcClass[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Spell;
