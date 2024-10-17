import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <main>
      {/* this component made for cosmetic-info section in landing page */}
      <div className="w-full h-[1336px] mt-[100.99px]">
        <div className="w-[1010px] mx-[83px]">
          <hr className="border-black" />
          {/* h1 */}
          <h1 className="text-[36px] mt-[63px] ml-[455px]">Cosmetics Info</h1>
          <div className="ml-[530px] mt-[31px] mb-[101px] w-[100px] h-[107px] space-y-2 flex-col justify center">
            <p>Korean</p>
            <p>Europian </p>
            <hr className="w-[70px] border-black" />
            <p>American </p>
          </div>
          {/* products */}
          {/* row 1 */}
          <section className="flex justify-between ml-[108px]">
            <div className="hover:-translate-y-1 ">
              <Image
                src={"/First-box.png"}
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 ">
              <Image
                src={"/Second-box.png"}
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 ">
              <Image
                src={"/Third-box.png"}
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
          </section>
          {/* row 2 */}
          <section className="flex justify-between ml-[108px] mt-[70px]">
            <div className="hover:-translate-y-1 ">
              <Image
                src={"/forth-box.png"}
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 ">
              <Image
                src={"/Fifth-box.png"}
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 ">
              <Image
                src={"/sixth-box.png"}
                alt="product picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
          </section>
          <div className="ml-[486px] mt-[118px]">
            <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px]">
              More
            </button>
          </div>
          <hr className="mt-[117px] border-black ml-[107px]" />
        </div>
      </div>
    </main>
  );
};

export default Info;
