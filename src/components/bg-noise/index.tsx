"use client";

import { DetailedHTMLProps, HTMLAttributes, useId, useMemo } from "react";
import { cn } from "~/utils/shadcn";
import { useImmer } from "use-immer";
import { Button, ButtonProps } from "~/ui/button";
import { heading } from "~/utils/fonts";

export function NoiseCard(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const { children, className, ...rest } = props;

  const id = useId();

  const [{ baseFrequency, numOctaves }, updateFilterOptions] = useImmer<{
    baseFrequency: number;
    numOctaves: number;
  }>({ baseFrequency: 0.2, numOctaves: 3 });

  const noise = useMemo(
    () =>
      `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='${id}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23${id})'/%3E%3C/svg%3E")`,
    [id, baseFrequency, numOctaves]
  );

  return (
    <div
      {...rest}
      className={cn(
        "relative overflow-hidden border-[0px] border-[#3CE68E] rounded-[40px] shadow-[0_0_8px_3px_#3CE68E,inset_0_0_8px_3px_#3CE68E]",
        className
      )}
    >
      <div
        className={cn("absolute w-full h-full left-0 top-0 z-[-1]")}
        style={{
          backgroundImage: [
            `radial-gradient(ellipse at center, black 0%, transparent 80%)`,
            noise,
          ].join(", "),
          filter: "contrast(102%) brightness(102%)",
        }}
      />
      {children}
    </div>
  );
}

export function NoiseButton(props: ButtonProps) {
  const { children, className, ...rest } = props;

  const id = useId();

  const [{ baseFrequency, numOctaves }, updateFilterOptions] = useImmer<{
    baseFrequency: number;
    numOctaves: number;
  }>({ baseFrequency: 0.2, numOctaves: 3 });

  const noise = useMemo(
    () =>
      `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='${id}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.4' filter='url(%23${id})'/%3E%3C/svg%3E")`,
    [id, baseFrequency, numOctaves]
  );

  return (
    <Button
      {...rest}
      className={cn(
        "relative overflow-hidden border-[3px] border-[#FE368A] rounded-[40px] shadow-[0_0_4px_2px_#FE368A,inset_0_0_12px_0_#FE368A,inset_0_0_0_4px_#000000]",
        heading.className,
        "text-[#B2FFBE] text-shadow-[]",
        className
      )}
      style={{
        textShadow:
          "2px 2px 2px rgba(0,0,0,0.4),inset 2px 2px 1px #FFFFFF,-4px -4px 4px #CD3055",
      }}
    >
      <div
        className={cn("absolute w-full h-full left-0 top-0 z-[-1]")}
        style={{
          backgroundImage: [
            `radial-gradient(circle at center, black 0%, transparent 80%)`,
            noise,
          ].join(", "),
          filter: "contrast(100%)",
        }}
      />
      {children}
    </Button>
  );
}
