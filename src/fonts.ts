import { Inter, Nabla, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const nabla = Nabla({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nabla",
});

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});
