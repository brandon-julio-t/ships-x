import ShipMission from './ship-mission';

export default interface Ship {
  id: string;
  name: string;
  image?: string;
  type: string;
  missions: ShipMission[];
  home_port: string;
  url: string;
  weight_kg: number;
  weight_lbs: number;
  year_built: number;
}
