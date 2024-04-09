"use server";

export async function getPrice() {
  const headers = new Headers();
  headers.append("X-CMC_PRO_API_KEY", process.env.API_KEY || "");

  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100",
    {
      headers: headers,
    },
  );
  const data = response.json();
  return data;
}
