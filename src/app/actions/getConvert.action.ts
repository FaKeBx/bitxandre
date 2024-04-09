"use server";

export async function priceDolar() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL",
  );
  const data = await response.json();
  return data;
}
