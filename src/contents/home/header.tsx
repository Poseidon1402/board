import { images } from "@/assets";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col gap-8 px-8">
      <div>
        <h1 className="text-5xl font-extrabold leading-tight">
          LET YOUR MIND{" "}
          <span className="bg-gradient-to-r from-[#724BF9] via-[#E25EF9] to-[#BD049E] bg-clip-text text-transparent">
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
    </div>
  );
};
