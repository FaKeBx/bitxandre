"use client";

import { priceDolar } from "@/app/actions/getConvert.action";
import { getPrice } from "@/app/actions/getPrices.action";
import { ConvertDTO } from "@/app/dtos/convert.dtos";
import { PriceDTO } from "@/app/dtos/price.dtos";
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

export default function PrecosPage() {
  const [cripto, setCripto] = useState<PriceDTO>({} as PriceDTO);
  const [conversionValue, setConversionValue] = useState<ConvertDTO>(
    {} as ConvertDTO,
  );

  useEffect(() => {
    async function fetchData() {
      const criptoData = (await getPrice()) as PriceDTO;
      setCripto(criptoData);
      const conversionValue = (await priceDolar()) as ConvertDTO;
      setConversionValue(conversionValue);
      setInterval(async () => {
        const criptoData = (await getPrice()) as PriceDTO;
        setCripto(criptoData);
        const conversionValue = (await priceDolar()) as ConvertDTO;
        setConversionValue(conversionValue);
      }, 60000);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] hidden md:table-cell">#</TableHead>
            <TableHead className="w-[100px]">Cripto</TableHead>
            <TableHead className="hidden md:table-cell">Nome</TableHead>
            <TableHead className="hidden min-[425px]:table-cell">
              Symbol
            </TableHead>
            <TableHead>USD</TableHead>
            <TableHead>BRL</TableHead>
            <TableHead className="text-right hidden md:table-cell">
              Gráfico
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cripto?.data?.map((cripto) => (
            <TableRow key={cripto.id}>
              <TableCell className="hidden md:table-cell">
                {cripto.cmc_rank}
              </TableCell>
              <TableCell>
                <Image
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${cripto.id}.png`}
                  alt="logo"
                  width={32}
                  height={32}
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {cripto.name}
              </TableCell>
              <TableCell className="hidden min-[425px]:table-cell">
                {cripto.symbol}
              </TableCell>
              <TableCell>${cripto.quote.USD.price.toLocaleString()}</TableCell>
              <TableCell>
                R$
                {(
                  cripto.quote.USD.price *
                  parseInt(conversionValue.USDBRL?.high)
                ).toLocaleString()}
              </TableCell>
              <TableCell className="w-[50px] hidden md:table-cell">
                <Image
                  className="grid justify-end "
                  src={`https://s3.coinmarketcap.com/generated/sparklines/web/1d/2781/${cripto.id}.svg`}
                  alt="logo"
                  width={48}
                  height={48}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
