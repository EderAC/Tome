export default interface ICreateCharacterDTO {
  id: string;
  name: string;
  school: string;
  cast: string;
  range: string;
  component: string;
  duration: string;
  material: string;
  description: string;
  pcClasses: PcClassIds[];
}

interface PcClassIds {
  id: string;
}
