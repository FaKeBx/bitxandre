"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { priceDolar } from "./actions/getConvert.action";
import { ConvertDTO } from "./dtos/convert.dtos";

const pricesWs = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");

export default function CoinCapPage() {
  const [prices, setPrices] = useState({} as { [key: string]: string });
  const [dolar, setDolar] = useState<ConvertDTO>({} as ConvertDTO);

  const [coin, setCoin] = useState(
    {} as {
      data: [
        {
          id: string;
          rank: string;
          symbol: string;
          name: string;
          supply: string;
          maxSupply: string;
          marketCapUsd: string;
          volumeUsd24Hr: string;
          priceUsd: string;
          changePercent24Hr: string;
          vwap24Hr: string;
          explorer: string;
        },
      ];
    },
  );

  pricesWs.onmessage = function (msg) {
    const data = JSON.parse(msg.data);
    setPrices(data);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.coincap.io/v2/assets");
      const dataCoin = await response.json();
      setCoin(dataCoin);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const conversionValue = (await priceDolar()) as ConvertDTO;
      setDolar(conversionValue);
    }
    fetchData();
  }, []);

  return (
    <div className="md:p-4 md:pt-8">
      <div className=" hidden md:block md:p-4 md:bg-slate-700 md:rounded-md">
        <ul className=" hidden md:flex justify-around items-center text-center">
          <li>
            <h2>Volume Disponível</h2>
            R$
            {coin?.data
              ?.reduce((total, coin) => {
                const volumeUsd = parseFloat(coin.marketCapUsd);
                const volumeBrl = volumeUsd * parseFloat(dolar.USDBRL?.high);
                return total + volumeBrl;
              }, 0)
              .toLocaleString()}
          </li>
          <li>
            <h2>Volume Comercializado</h2>
            R$
            {coin?.data
              ?.reduce((total, coin) => {
                const volumeUsd = parseFloat(coin.volumeUsd24Hr);
                const volumeBrl = volumeUsd * parseFloat(dolar.USDBRL?.high);
                return total + volumeBrl;
              }, 0)
              .toLocaleString()}
          </li>
        </ul>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] hidden md:table-cell">#</TableHead>
            <TableHead className="w-[200px]">Cripto</TableHead>
            <TableHead className="w-[50px] hidden md:table-cell">
              Nome
            </TableHead>
            <TableHead className="hidden min-[425px]:table-cell">
              Symbol
            </TableHead>
            <TableHead>USD</TableHead>
            <TableHead>BRL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coin?.data?.map((coin) => {
            return (
              <TableRow
                key={coin.id}
                className={`${
                  parseFloat(prices[coin.name.toLowerCase()]) >
                  parseFloat(coin.priceUsd)
                    ? "bg-emerald-300"
                    : parseFloat(prices[coin.name.toLowerCase()]) <
                        parseFloat(coin.priceUsd)
                      ? "bg-rose-300"
                      : "inherit"
                } transition duration-1000`}
              >
                <TableCell className="hidden md:table-cell">
                  {coin.rank}
                </TableCell>
                <TableCell className=" flex gap-1 items-center ">
                  <Image
                    className=" w-full h-full max-w-[32px] max-h-[32px] rounded-sm"
                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                    alt="logo"
                    width={32}
                    height={32}
                  />
                  <div className=" ">
                    <p>{coin.name}</p>
                    <span className=" text-slate-500">{coin.symbol}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {coin.name}
                </TableCell>
                <TableCell className="hidden min-[425px]:table-cell">
                  {coin.symbol}
                </TableCell>

                <TableCell>
                  $
                  {parseFloat(prices[coin.name.toLowerCase()])
                    ? parseFloat(
                        prices[coin.name.toLowerCase()],
                      ).toLocaleString()
                    : parseFloat(coin.priceUsd).toLocaleString()}
                </TableCell>
                <TableCell>
                  R$
                  {parseFloat(prices[coin.name.toLowerCase()])
                    ? (
                        parseFloat(prices[coin.name.toLowerCase()]) *
                        parseFloat(dolar.USDBRL.high)
                      ).toLocaleString()
                    : (
                        parseFloat(coin.priceUsd) *
                        parseFloat(dolar.USDBRL?.high)
                      ).toLocaleString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
