import Image from "next/image";

export default function ComingSoon() {
  return (
    <>
      <div className="px-[var(--page-px)] py-15 flex flex-col justify-center items-center">
        <div className="max-w-[480px]  space-y-15">
          <div className="space-y-2">
            <p>
              Welcome to the enigmatic world of Brainwave Broadcasting, a new
              AI-generated livestream channel that will leave you spellbound. Be
              prepared to embark on a journey that will test the limits of your
              perception and push the boundaries of your understanding of
              reality.
            </p>
            <p>
              Brainwave Broadcasting is not just a channel, it's a gateway to a
              world of infinite possibilities. Join us on this adventure and let
              your mind be blown away by the wonders of AI-generated
              entertainment. The future is here, and it's pulsating with the
              energy of Brainwave TV.
            </p>
          </div>
          <div className="relative w-full pb-[100%]">
            <Image
              fill
              src={"/teaser.png"}
              className="object-cover"
              alt={"Empty Brainwaves"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
