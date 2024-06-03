export type HouseType = {
  id: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
  house_img: string[];
  post_title: string;
  region: string;
  district: string;
  house_type: 0 | 1 | 2 | 3;
  rental_type: 0 | 1 | 2;
  house_size: number;
  room_num: 1;
  deposit_price: number;
  monthly_price: number;
  house_appeal: string[];
  mates_num: number;
  term: [number, number];
  describe: string;
  bookmark: 0 | 1;
  visible: 0 | 1 | undefined;
  user_id: string | undefined;
};