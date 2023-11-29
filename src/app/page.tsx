import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100svw] h-[100svh] flex flex-col justify-center items-center select-none">
      <div className="container flex-1 flex flex-col items-center justify-center">
        <Link href={"/"} className="w-full">
          <Image
            src="/logo.svg"
            alt="Brainwave Broadcasting"
            fill
            className="max-w-full"
            draggable={false}
          />
        </Link>
      </div>
    </div>
  );
}
