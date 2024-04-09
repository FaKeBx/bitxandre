import Link from "next/link";

export default function Menu() {
  return (
    <nav className=" flex justify-between bg-slate-100 w-full m-auto p-2 pl-4">
      <Link href="/" className=" text-2xl font-nabla">
        BitXandre
      </Link>
      <ul className=" flex items-center ">
        <li>
          <Link href="/sobre" className=" font-poppins">
            sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
