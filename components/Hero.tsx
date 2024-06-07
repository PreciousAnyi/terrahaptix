import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative">
      <Image
        className="ml-[24px]"
        src="/Terrahaptix_logo.png"
        alt="Terrahaptix logo"
        width={340}
        height={154}
      />
      <div className="w-[494px] h-[183px] mt-[702px] absolute right-0">
        <h1 className="text-[61px]">
          Accelerating autonomy for emerging markets
        </h1>
      </div>
    </section>
  );
};

export default Hero;
