import Link from "next/link";

export default function Menu() {
  return (
    <nav className=" flex justify-between bg-slate-700 w-full m-auto p-2 pl-4 text-slate-50">
      <Link href="/" className=" text-2xl font-nabla">
        BitXandre
      </Link>
      <ul className=" flex items-center gap-4 ">
        <li className=" bg-slate-400 rounded-sm py-1 px-2">
          <Link href="/v1" className="font-poppins">
            Versão 1
          </Link>
        </li>
        <li className=" bg-slate-400 rounded-sm py-1 px-2">
          <Link href="/sobre" className="font-poppins">
            sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
