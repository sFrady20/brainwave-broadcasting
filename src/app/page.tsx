import Image from "next/image";
import Link from "next/link";
import { NoiseButton, NoiseCard } from "~/components/bg-noise";
import { TwitchPlayer } from "~/components/twitch-player";
import { YoutubePlayer } from "~/components/youtube-player";
import { Button } from "~/ui/button";

export default function Home() {
  return (
    <>
      <div className="container flex-1 flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Brainwave Broadcasting"
          fill
          className="max-w-full"
          draggable={false}
        />
      </div>
      <TwitchPlayer
        width={"100vw"}
        height={"100vh"}
        className="absolute left-0 top-0 w-[100vw] h-[100vh] z-10"
      />
      {/*
      <NoiseCard className="flex flex-col justify-center items-center p-10 absolute left-1/2 bottom-10 transform -translate-x-1/2">
        <NoiseButton>Live</NoiseButton>
      </NoiseCard>
      */}
    </>
  );
}
