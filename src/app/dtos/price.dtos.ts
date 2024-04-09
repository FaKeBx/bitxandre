export interface PriceDTO {
  data: [
    {
      id: string;
      name: string;
      symbol: string;
      cmc_rank: string;
      quote: { USD: { price: number; last_updated: Date } };
    },
  ];
}
