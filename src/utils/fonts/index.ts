import { Kanit } from "next/font/google";
import localFont from "next/font/local";

export const body = Kanit({
  subsets: ["latin"],
  weight: ["300", "400"],
});
export const heading = localFont({ src: "./pag-revolucion.ttf" });
