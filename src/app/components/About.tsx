import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main>
      {/* this component  for about section in landing page*/}
      <div className="w-[990.79px] h-[813.01px] mt-[98px] ml-[100px] mr-[131.31px] mb-[100.99px]">
        {/* heading */}
        <h1 className="pb-[140px] ml-[454px] text-[30px]">About US</h1>
        <div className="flex justify-between ">
                {/* left section */}
          <section className="w-[579px] h-[563px] mr-[90px]">
            <div className="mr-[219.56px]">
              <h2 className="text-[30px] mb-[35px]">Start new info</h2>
              <p className="mb-[35px]">
                When you want buy new cosmetics you need know about this
                cosmetics. This site help you find cosmetics what you want. We
                can help you to get acquainted with cosmetics. And you can find
                information about skin problem for teenager, adult and elder
                woman. We tell you about face skin cosmetics, hair cosmetics,
                cosmetics for makeup. We have got three sections: Korean
                cosmetics, American cosmetics, Europian cosmetics.
              </p>
              <p>
                We talk about brands: CHI(American hair cosmetics), Some by
                mi(Korean face cosmetics), La Roche-Posay(French face cosmetics)
                and other brands. We take cosmetics different price. Because not
                all can buy expensive cosmetics but all women want look
                beautiful. That's why we start this project! All women can buy
                cosmetics!
              </p>
            </div>
          </section>
          {/* right section */}
          <div>
            <Image
              src={"/about-home.png"}
              alt="picture about us "
              width={316.79}
              height={485}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-[69.81px] ml-[467.52px] ">
          <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px] text-center">More</button>
        </div>
      </div>
    </main>
  );
};

export default About;
