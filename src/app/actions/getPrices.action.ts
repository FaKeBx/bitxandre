"use server";

export async function getPrice() {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100",
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY,
      },
    },
  );
  const data = response.json();
  return data;
}
