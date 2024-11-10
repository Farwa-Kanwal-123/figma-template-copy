import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className='w-full h-[736px] bg-[url("/bg.png")] bg-center bg-cover font-serif'>
      <div className="flex text-white justify-between pt-6 font-[Playfair Display]">
        {/* logo */}
        <div className="pl-[103px] pt-[24px] text-[36px]">
          INFO BAO
        </div>
        {/* nav-bar */}
        <div className="pr-[158px] pt-[47px]">
          <ul className="flex gap-6 ">
            <li className="hover:-translate-y-1 "><Link href={""}>Home</Link></li>
            <li className="hover:-translate-y-1 "><Link href={"/about"}>About Us</Link></li>
            <li className="hover:-translate-y-1 "><Link href={"/blogs"}>Blogs</Link></li>
            <li className="hover:-translate-y-1 "><Link href={"/cosmatic"}>Cosmetics Info</Link></li>
            <li className="hover:-translate-y-1 "><Link href={"/contact"}>Contact</Link></li>
          </ul>
          {/* hero section */}
          <div className="mt-[112px]   ">
            <h1 className="text-[47px] pb-[24px]">About Cosmetics</h1>
            <p> Learn more about other cosmetics with INFO BAO</p>
          </div>
          {/* button */}
          <div className="mt-[58px] pl-[112px]">
            <button className="border-[1px] border-white p-1 px-3">More information</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
