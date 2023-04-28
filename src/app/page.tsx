import { Inter } from "next/font/google";
import Image from "next/image";
import { DateTime } from "luxon";
import { useMemo } from "react";
import { groupBy, map, orderBy, entries } from "lodash";
import ComingSoon from "./ComingSoon";
import Player from "./Player";

const inter = Inter({ subsets: ["latin"] });

let schedule = [
  ...new Array(10).fill("").map((x) => ({
    time: DateTime.now()
      .plus({ hours: Math.random() * 200 })
      .toISO()!,
    image: "/placeholder.png",
    show: "Oddball Industries",
    episode: "The drug test",
  })),
];

schedule = [];

export default function Home() {
  const days = useMemo(
    () => groupBy(schedule, (x) => DateTime.fromISO(x.time).toISODate()),
    [schedule]
  );

  return (
    <>
      <div className="flex justify-center items-center">
        <Player />
      </div>
      {schedule?.length > 0 && (
        <>
          <header className="px-[var(--page-px)] bg-zinc-900 sticky top-0 z-60">
            <div className=" w-full flex items-center justify-between border-b border-zinc-800">
              <div className="h-[var(--page-header-h)] flex items-center space-x-10">
                <div className="text-lg font-bold">Schedule</div>
              </div>
              <div></div>
            </div>
          </header>
          <main className="bg-zinc-800">
            {map(
              orderBy(entries(days), (x) => x[0]),
              ([day, blocks]) => (
                <div key={day}>
                  <div className="bg-zinc-900 px-[var(--page-px)] py-3 sticky top-[var(--page-header-h)] z-50 text-sm">
                    {DateTime.fromISO(day).toFormat("LLL dd")}
                  </div>
                  <div className="divide-y divide-zinc-700">
                    {blocks.map((block, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-10 py-10 px-[var(--page-px)] gap-10 <md:(gap-2)"
                      >
                        <div className="col-span-1 font-bold <xl:(col-span-2) <md:(col-span-3)">
                          <div className="text-lg">
                            {DateTime.fromISO(block.time).toFormat("h:mm a")}
                          </div>
                        </div>
                        <div className="col-span-3 font-bold <xl:(col-span-3) <md:(hidden)">
                          <div className="relative pb-[56%] border">
                            {/* <Image
                              src={block.image}
                              fill
                              alt={"Show"}
                              className={"object-cover"}
                            /> */}
                          </div>
                        </div>
                        <div className="col-span-6 font-bold space-y-2 <xl:(col-span-5) <md:(col-span-7)">
                          <div>
                            <h3 className="text-xl font-medium">
                              {block.show}
                            </h3>
                            <h4 className="text-zinc-500 font-normal">
                              {block.episode}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </main>
        </>
      )}
    </>
  );
}
