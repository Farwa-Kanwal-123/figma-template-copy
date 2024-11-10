// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <main>
//       {/* this component  for about section in landing page*/}
//       <div className="w-[990.79px] h-[813.01px] mt-[98px] ml-[100px] mr-[131.31px] mb-[100.99px]">
//         {/* heading */}
//         <h1 className="pb-[140px] ml-[454px] text-[30px]">About US</h1>
//         <div className="flex justify-between ">
//                 {/* left section */}
//           <section className="w-[579px] h-[563px] mr-[90px]">
//             <div className="mr-[219.56px]">
//               <h2 className="text-[30px] mb-[35px]">Start new info</h2>
//               <p className="mb-[35px]">
//                 When you want buy new cosmetics you need know about this
//                 cosmetics. This site help you find cosmetics what you want. We
//                 can help you to get acquainted with cosmetics. And you can find
//                 information about skin problem for teenager, adult and elder
//                 woman. We tell you about face skin cosmetics, hair cosmetics,
//                 cosmetics for makeup. We have got three sections: Korean
//                 cosmetics, American cosmetics, Europian cosmetics.
//               </p>
//               <p>
//                 We talk about brands: CHI(American hair cosmetics), Some by
//                 mi(Korean face cosmetics), La Roche-Posay(French face cosmetics)
//                 and other brands. We take cosmetics different price. Because not
//                 all can buy expensive cosmetics but all women want look
//                 beautiful. That&#39;s why we start this project! All women can buy
//                 cosmetics!
//               </p>
//             </div>
//           </section>
//           {/* right section */}
//           <div>
//             <Image
//               src={"/about-home.png"}
//               alt="picture about us "
//               width={316.79}
//               height={485}
//               objectFit="cover"
//             />
//           </div>
//         </div>
//         <div className="mt-[69.81px] ml-[467.52px] ">
//           <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px] text-center">More</button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default About;



import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-8">
      {/* This component is for the about section on the landing page */}
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold my-8">About Us</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Left section */}
          <section className="lg:w-2/3 lg:mr-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Start New Info</h2>
            <p className="mb-4 text-sm md:text-base lg:text-lg">
              When you want to buy new cosmetics, you need to know about them. This site helps you find the cosmetics you want. We can help you get acquainted with cosmetics and find information about skin problems for teenagers, adults, and elders. We talk about face, hair, and makeup cosmetics and have sections for Korean, American, and European products.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              We discuss brands like CHI (American hair cosmetics), Some by mi (Korean face cosmetics), La Roche-Posay (French face cosmetics), and others. We cater to all budgets because not everyone can buy expensive cosmetics, but everyone wants to look beautiful. That’s why we started this project—to make cosmetics accessible to all!
            </p>
          </section>
          {/* Right section */}
          <div className="mt-8 lg:mt-0">
            <Image
              src="/about-home.png"
              alt="About us"
              width={316}
              height={485}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 border border-black text-sm lg:text-base">More</button>
        </div>
      </div>
    </main>
  );
};

export default About;
