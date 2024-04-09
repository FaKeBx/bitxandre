export default function SobrePage() {
  return (
    <div className=" p-8 ">
      <h1 className="text-3xl font-bold mb-4 text-slate-50">BitXandre?</h1>
      <p className="text-slate-300 mb-4">
        Este é um projeto de estudo para aprimorar minhas habilidades com
        <strong className=" text-yellow-500"> NextJS </strong> e{" "}
        <strong className=" text-yellow-500"> TailwindCSS </strong>. O projeto é
        um site que exibe informações sobre criptomoedas. Tive a ideia de criar
        o site enquanto conversava com meu sogro{" "}
        <strong className=" text-yellow-500"> Alexandre </strong>, que é um
        grande entusiasta de criptomoedas.
      </p>

      <h2 className="text-2xl font-bold mb-2">Como funciona?</h2>
      <p className="text-slate-300 mb-4">
        O site faz requisições para a API do CoinMarketCap para obter
        informações sobre as criptomoedas. A API é atualizada a cada 60
        segundos.
      </p>

      <h2 className="text-2xl font-bold mb-2">Por que?</h2>
      <p className="text-slate-300 mb-4">
        O objetivo é praticar e aprender mais sobre o Next.js e o TailwindCSS.
      </p>

      <h2 className="text-2xl font-bold mb-2">Quem sou eu?</h2>
      <p className="text-slate-300">
        Meu nome é <strong className=" text-yellow-500"> Felipe </strong>, sou{" "}
        <strong className=" text-yellow-500"> Dev Web </strong> (em busca do
        full-stack) e apaixonado por tecnologia.
      </p>
    </div>
  );
}
