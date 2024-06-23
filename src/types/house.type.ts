export type HouseType = {
  house_img: string[];
  post_title: string;
  region: string;
  district: string;
  house_type: 0 | 1 | 2 | 3 | undefined;
  rental_type: 0 | 1 | 2 | 3 | undefined;
  house_size: number;
  room_num: number;
  deposit_price: number;
  monthly_price: number;
  manage_price: number;
  house_appeal: string[];
  mates_num: number;
  term: [number, number];
  describe?: string;
  bookmark: 0 | 1;
  visible: 0 | 1 | undefined;
  user_id: string | undefined;
};