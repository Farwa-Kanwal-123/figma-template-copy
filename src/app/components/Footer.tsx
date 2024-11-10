// import React from "react";

// const Footer = () => {
//   return (
//     // main div
//     <main className="w-full h-[411px] bg-[#2F2F2F] text-[#CDCACA] flex items-center font-serif ">
//       {/* inner div */}
//       <div className="w-[1000px] h-[286px]  border-t-2 border-b-2 border-[#CDCACA] ml-[117px] ">
//         {/* sub dive */}
//         <div className="flex justify-around pt-[35px]">
//           {/* 3 columns */}
//           {/* first coloumn */}
//           <div className="w-[78px] h-[184px] flex gap-[22px]  ">
//             <ul className="grid gap-[15px] text-center ">
//               <li className="text-[18px] font-semibold">Company</li>
//               <li>Information</li>
//               <li>Contact</li>
//               <li>About </li>
//               <li>News</li>
//             </ul>
//           </div>
//           {/* vertical line */}
//           <div className="border-[#CDCACA] border-[1px] h-[205px] "></div>
//           {/* second coloumn */}
//           <div>
//             <ul className="grid gap-[18px] items-center-center text-center">
//               <li className="text-[18px] font-semibold">Location</li>
//               <li>South Los Angeles</li>
//               <li>+1234567890</li>
//               <li className="text-[18px] mt-8"> We always ready speak with you!</li>
//             </ul>
//           </div>
//           {/* vertical line */}
//           <div className="border-[#CDCACA] border-[1px] h-[205px] "></div>
//           {/* third coloumn */}
//           <div>
//             <ul className="grid gap-[16px] text-center">
//               <li className="text-[18px] font-semibold ">Get in touch</li>
//               <li>infobao-contact@gmail.com</li>
//               <li>Instagtam</li>
//               <li>Facebook</li>
//               <li>Twitter</li>
//             </ul>
//           </div>
//         </div>
//         <section className=" mt-[50px] flex justify-between">
//       <div className=" text-[24px] pt-[5px] ">
//           <h1>INFO BAO</h1>
//       </div>
//       <div className="pt-[12px]">
//       2021 ©infobao. All Rights Reserved.
//       </div>
//       </section>
    
//       </div>
//     </main>
//   );
// };

// export default Footer;




import React from "react";

const Footer = () => {
  return (
    <main className="w-full bg-[#2F2F2F] text-[#CDCACA] flex items-center font-serif">
      <div className="w-full max-w-screen-xl mx-auto py-8 border-t-2 border-b-2 border-[#CDCACA]">
        {/* Inner Container */}
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16">
          {/* First section */}
          <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
            <ul className="text-center lg:text-left space-y-4">
              <li className="text-lg font-semibold">Company</li>
              <li>Information</li>
              <li>Contact</li>
              <li>About</li>
              <li>News</li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="border-[#CDCACA] border-[1px] lg:h-[205px] hidden lg:block"></div>

          {/* Second section */}
          <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
            <ul className="text-center lg:text-left space-y-4">
              <li className="text-lg font-semibold">Location</li>
              <li>South Los Angeles</li>
              <li>+1234567890</li>
              <li className="text-lg mt-8">We are always ready to speak with you!</li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="border-[#CDCACA] border-[1px] lg:h-[205px] hidden lg:block"></div>

          {/* 3rd section code */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <ul className="text-center lg:text-left space-y-4">
              <li className="text-lg font-semibold">Get in touch</li>
              <li>infobao-contact@gmail.com</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8 px-4 lg:px-16">
          <div className="text-2xl font-bold">INFO BAO</div>
          <div className="pt-2 text-sm">2021 ©infobao. All Rights Reserved.</div>
        </section>
      </div>
    </main>
  );
};

export default Footer;
