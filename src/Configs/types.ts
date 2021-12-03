export type GameType = {
  title: string;
  url: string;
  logo: string;
  price: {
    originalPrice: number;
    discountPrice: number;
  };
  promotion: {
    promotionalOffers: {
      startDate: string;
      endDate: string;
    } | null;
    upcomingPromotionalOffers: {
      startDate: string;
      endDate: string;
    } | null;
  };
};
