import React from "react";
import Image from "next/image";

const Cosmatic = () => {
  return (
    <main className="w-[full] h-[2500px] font-serif ">
      <section>
        <h1 className="mt-[136px] mb-[79px] text-center text-[24px]">
          Information about Cosmeticts
        </h1>
      </section>
      {/* start main sections */}
      <section className="w-[1050px] mt-[46px] border-[#837F7F] border-t-[2px] mx-[100px]">
        {/* section 1 American Cosmatics */}
        <section>
          <div className="w-[900px] h-[700px] ml-[80px] flex-col">
            <div className="text-center mt-[46px] text-[20px]">
              American Cosmetics
            </div>
            <div className="mt-[45px] ml-[79px]">
              <ul className="flex gap-[130px] text-[14px] ">
                <li>CHI</li>
                <li>Mary Kay</li>
                <li>Mario Badescu</li>
                <li>Tigi </li>
                <li>Shiseido</li>
              </ul>
            </div>
            <div className="flex justify-between mt-[76px] mb-[77px]">
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Am-box-1.png"}
                  alt="skin problem picture"
                  width={213}
                  height={302}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Am-box-2.png"}
                  alt="skin problem picture"
                  width={213}
                  height={302}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/Am-box-2.png"}
                  alt="skin problem picture"
                  width={213}
                  height={302}
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
        {/* section 2 Korean Cosmetics */}
        <section className="w-[1050px] border-[#837F7F] border-t-[2px]">
          <div className="w-[900px] h-[700px] ml-[80px] flex-col ">
            <div className="text-center mt-[46px] text-[20px]">
            Korean Cosmetics
            </div>
            <div className="mt-[45px] ml-[79px]">
              <ul className="flex gap-[130px] text-[14px] ">
                <li>Cosrx </li>
                <li>Rovectin</li>
                <li>Medi Peel</li>
                <li>La&#39;dor  </li>
                <li>Aromatica </li>
              </ul>
            </div>
            <div className="flex justify-between mt-[76px] mb-[77px]">
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Kore-box-1.png"}
                  alt="Korea product picture"
                  width={213}
                  height={302}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Kore-box-2.png"}
                  alt="Korea product picture"
                  width={213}
                  height={302}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/Kore-box-3.png"}
                  alt="Korea product picture"
                  width={213}
                  height={302}
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
        {/* section 3 Europian Cosmetics */}
        <section className="w-[1050px] border-[#837F7F] border-t-[2px] border-b-[2px]">
          <div className="w-[900px] h-[700px] ml-[80px] flex-col ">
            <div className="text-center mt-[46px] text-[20px]">
            Europian Cosmetics
            </div>
            <div className="mt-[45px] ml-[79px]">
              <ul className="flex gap-[130px] text-[14px] ">
                <li>IdHair </li>
                <li>Kerastase </li>
                <li>Lancome </li>
                <li>Mades </li>
                <li>Estee Lauder </li>
              </ul>
            </div>
            <div className="flex justify-between mt-[76px] mb-[77px]">
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Euro-box-1.png"}
                  alt="Europian product picture"
                  width={213}
                  height={302}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src={"/Euro-box-2.png"}
                  alt="Europian product picture"
                  width={213}
                  height={302}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1 ">
                <Image
                  src={"/Euro-box-3.png"}
                  alt="Europian product picture"
                  width={213}
                  height={302}
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
      </section>
    </main>
  );
};

export default Cosmatic;
