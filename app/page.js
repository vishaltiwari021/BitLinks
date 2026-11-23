// const poppinsItalic = Poppins_Italic({
//   variable: "--font-poppins-italic",
//   subsets: ["latin"],
// import { Poppins_Italic } from "next/font/google";
// });
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 gap-4 h-[50vh]">
        <div className="left flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">
            The best URL shortener in the market.
          </p>
          <p className="text-center">We’re the universe’s most straightforward URL shortener.
            Most URL shorteners track you or require you to provide login details. We understand your needs, so we created this URL shortener.
          </p>
          <div className="flex gap-2">
            <Link href="/shorten">
              <button className="cursor-pointer bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="cursor-pointer bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="right flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="image not found"
            src={"/vector.png"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
