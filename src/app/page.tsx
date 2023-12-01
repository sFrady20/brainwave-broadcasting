import Image from "next/image";
import Link from "next/link";
import { TwitchPlayer } from "~/components/twitch-player";
import { YoutubePlayer } from "~/components/youtube-player";

export default function Home() {
  return (
    <>
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
      <TwitchPlayer
        width={"100vw"}
        height={"100vh"}
        className="relative z-10 shadow-2xl"
      />
    </>
  );
}
