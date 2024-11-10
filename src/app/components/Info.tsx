// import React from "react";
// import Image from "next/image";

// const Info = () => {
//   return (
//     <main>
//       {/* this component made for cosmetic-info section in landing page */}
//       <div className="w-full h-[1336px] mt-[100.99px]">
//         <div className="w-[1010px] mx-[83px]">
//           <hr className="border-black" />
//           {/* h1 */}
//           <h1 className="text-[36px] mt-[63px] ml-[455px]">Cosmetics Info</h1>
//           <div className="ml-[530px] mt-[31px] mb-[101px] w-[100px] h-[107px] space-y-2 flex-col justify center">
//             <p>Korean</p>
//             <p>Europian </p>
//             <hr className="w-[70px] border-black" />
//             <p>American </p>
//           </div>
//           {/* products */}
//           {/* row 1 */}
//           <section className="flex justify-between ml-[108px]">
//             <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/First-box.png"}
//                 alt="product picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//             <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/Second-box.png"}
//                 alt="product picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//             <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/Third-box.png"}
//                 alt="product picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//           </section>
//           {/* row 2 */}
//           <section className="flex justify-between ml-[108px] mt-[70px]">
//             <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/forth-box.png"}
//                 alt="product picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//             <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/Fifth-box.png"}
//                 alt="product picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//             <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/sixth-box.png"}
//                 alt="product picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//           </section>
//           <div className="ml-[486px] mt-[118px]">
//             <button className="px-[50px] py-[10px] border-[1px] border-black text-[14px]">
//               More
//             </button>
//           </div>
//           <hr className="mt-[117px] border-black ml-[107px]" />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Info;



import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <main className="w-full px-4 md:px-8 lg:px-16 py-8">
      {/* Cosmetic-info section for landing page */}
      <div className="max-w-screen-lg mx-auto">
        <hr className="border-black" />
        
        {/* Heading */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-8 mb-4 font-semibold">Cosmetics Info</h1>
        
        {/* Categories */}
        <div className="text-center my-8 space-y-2">
          <p>Korean</p>
          <p>European</p>
          <hr className="w-16 mx-auto border-black" />
          <p>American</p>
        </div>

        {/* Products */}
        {/* Row 1 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-8">
          <div className="hover:-translate-y-1 transition-transform">
            <Image
              src="/First-box.png"
              alt="product picture"
              width={206}
              height={305}
              className="object-cover"
            />
          </div>
          <div className="hover:-translate-y-1 transition-transform">
            <Image
              src="/Second-box.png"
              alt="product picture"
              width={206}
              height={305}
              className="object-cover"
            />
          </div>
          <div className="hover:-translate-y-1 transition-transform">
            <Image
              src="/Third-box.png"
              alt="product picture"
              width={206}
              height={305}
              className="object-cover"
            />
          </div>
        </section>

        {/* Row 2 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="hover:-translate-y-1 transition-transform">
            <Image
              src="/forth-box.png"
              alt="product picture"
              width={206}
              height={305}
              className="object-cover"
            />
          </div>
          <div className="hover:-translate-y-1 transition-transform">
            <Image
              src="/Fifth-box.png"
              alt="product picture"
              width={206}
              height={305}
              className="object-cover"
            />
          </div>
          <div className="hover:-translate-y-1 transition-transform">
            <Image
              src="/sixth-box.png"
              alt="product picture"
              width={206}
              height={305}
              className="object-cover"
            />
          </div>
        </section>

        {/* More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-2 border border-black text-sm md:text-base">More</button>
        </div>
        
        <hr className="mt-12 border-black" />
      </div>
    </main>
  );
};

export default Info;
