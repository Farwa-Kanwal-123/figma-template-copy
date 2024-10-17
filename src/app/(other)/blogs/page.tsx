import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <main className="w-[full] h-[2100px] font-serif ">
      <section>
        <h1 className="mt-[64px] mb-[67px] text-center text-[24px]">Blogs</h1>
      </section>
      {/* start main sections */}
      <section className="w-[1000px] h-[1896px]">
        {/* section 1 Face */}
        <section>
          <div className="w-[1000px] h-[610px] mt-[46px] flex-col border-[#837F7F] border-t-[1px] mx-[150px]">
            <div className="text-center mt-[46px] text-[20px]">Face</div>
            <div className="flex justify-between mt-[48px] mb-[77px]">
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Cleanser-box.png"}
                  alt="skin problem picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src={"/patches-box.png"}
                  alt="skin problem picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/Masks-box.png"}
                  alt="skin problem picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center mb-[66px]">
              <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px] text-center">
                More
              </button>
            </div>
          </div>
        </section>
        {/* section 2 Body */}
        <section className="w-[1000px] h-[610px] border-[#837F7F] border-t-[1px] mx-[150px]">
          <div className="mt-[46px] flex-col">
            <div className="text-center mt-[46px] text-[20px]">Body</div>
            <div className="flex justify-between mt-[48px] mb-[77px]">
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Body-scrab.png"}
                  alt="Body-scrab picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/Body-lotion.png"}
                  alt="body-lotion picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>

              <div className="hover:-translate-y-1">
                <Image
                  src={"/Body-oil.png"}
                  alt="Body-oil picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center mb-[66px]">
              <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px] text-center">
                More
              </button>
            </div>
          </div>
        </section>
        {/* section 3 hair */}
        <section className="w-[1000px] h-[610px] border-[#837F7F] border-t-[1px] mx-[150px]">
          <div className="mt-[46px] flex-col">
            <div className="text-center mt-[46px] text-[20px]">Body</div>
            <div className="flex justify-between mt-[48px] mb-[77px]">
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/hairbrush-box.png"}
                  alt="hairbrush picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/Hair-Styling.png"}
                  alt="Hair-Styling picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Hair-split ends.png"}
                  alt="Hair-split ends picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center mb-[66px]">
              <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px] text-center">
                More
              </button>
            </div>
          </div>
        </section>
        <hr className="w-[1000px] mt-[46px] border-[#837F7F] border-t-[1px] mx-[150px]"/>
      </section>
    </main>
  );
};

export default Blog;
