export type GameType = {
  title: string;
  url: string;
  logo: string;
  description: string;
  price: {
    originalPrice: number;
    discountPrice: number;
  };
  promotions: {
    startDate: string;
    endDate: string;
  };
};
