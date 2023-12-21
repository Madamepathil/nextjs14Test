import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 w-full">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 p-5">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Plattform
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              consectetur quos libero ut veritatis nesciunt dolores aspernatur
              itaque accusantium repudiandae.
            </p>
            <Button asChild size={"lg"} className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            alt="Hero"
            width={1000}
            height={1000}
            src={"/assets/images/hero.png"}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className=" w-full max-w-7xl mx-auto my-8 flex flex-col gap-8 md:gap-12 px-5"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands Of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search Categoryfilter
        </div>
      </section>
    </>
  );
}
