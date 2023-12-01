"use client";

import { TwitchEmbed, TwitchEmbedProps } from "react-twitch-embed";

export const TwitchPlayer = (props: TwitchEmbedProps) => {
  const { ...rest } = props;

  return (
    <TwitchEmbed
      channel="brainwavebroadcasting"
      autoplay
      allowFullscreen
      {...rest}
    />
  );
};
