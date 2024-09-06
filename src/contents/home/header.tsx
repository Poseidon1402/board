import { images } from "@/assets";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col gap-8 px-8">
      <div>
        <h1 className="text-5xl font-extrabold leading-tight">
          LET YOUR MIND{" "}
          <span className="custom-gradient-background bg-clip-text text-transparent">
            EXPLORE
          </span>{" "}
          NEW WORLD
        </h1>
        <p className="text-lg font-normal leading-8">
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>
      </div>
      <Image src={images.vr} alt="VR" />
      <div className="flex gap-6">
        <button className="custom-gradient-background h-16 w-full skew-x-[-20deg] text-lg font-bold">
          BUY NOW
        </button>
        <button className="custom-gradient-background w-full skew-x-[-20deg] p-[1px] text-lg font-bold">
          <span className="flex h-full w-full items-center justify-center bg-background">
            <span className="custom-gradient-background bg-clip-text text-transparent">
              PLAY NOW
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};
