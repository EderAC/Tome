import ICreatePcClassDTO from '../dtos/ICreatePcClassDTO';
import PcClass from '../infra/typeorm/entities/PcClass';

export default interface IPcClassesRepository {
  create(data: ICreatePcClassDTO): Promise<PcClass>;
  findAll(): Promise<PcClass[]>;
  findById(id: string): Promise<PcClass | undefined>;
}
