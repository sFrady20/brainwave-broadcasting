"use client";

import { TwitchEmbed } from "react-twitch-embed";

const Player = () => {
  return (
    <TwitchEmbed
      channel="brainwavebroadcasting"
      width={"100vw"}
      height={"100vh"}
      autoplay
      allowFullscreen
    />
  );
};

export default Player;
