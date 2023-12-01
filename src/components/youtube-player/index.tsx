"use client";

import { DetailedHTMLProps, IframeHTMLAttributes } from "react";

export function YoutubePlayer(
  props: { videoId: string } & DetailedHTMLProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >
) {
  const { videoId, ...rest } = props;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      {...rest}
    />
  );
}

//https://img.youtube.com/vi/SBWvBIW9Mgc/0.jpg
