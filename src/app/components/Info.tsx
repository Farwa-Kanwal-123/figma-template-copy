import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <main>
      {/* Cosmetic-info section in landing page */}
      <div className="w-full h-[1336px] mt-[101px]">
        <div className="w-[90%] max-w-[1010px] mx-auto">
          <hr className="border-black" />
          {/* Title */}
          <h1 className="text-[36px] mt-[63px] text-center">Cosmetics Info</h1>
          <div className="flex flex-col items-center mt-[31px] mb-[101px] space-y-2">
            <p>Korean</p>
            <p>European</p>
            <hr className="w-[70px] border-black" />
            <p>American</p>
          </div>
          {/* Products */}
          {/* Row 1 */}
          <section className="flex justify-between mx-[108px]">
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/First-box.png"
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/Second-box.png"
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/Third-box.png"
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
          </section>
          {/* Row 2 */}
          <section className="flex justify-between mx-[108px] mt-[70px]">
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/forth-box.png"
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/Fifth-box.png"
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/sixth-box.png"
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
          </section>
          <div className="flex justify-center mt-[118px]">
            <button className="px-[50px] py-[10px] border border-black text-[14px]">
              More
            </button>
          </div>
          <hr className="mt-[117px] border-black" />
        </div>
      </div>
    </main>
  );
};

export default Info;
