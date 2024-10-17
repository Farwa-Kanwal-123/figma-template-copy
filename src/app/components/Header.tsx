import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <main>
      {/* Header */}
      <div className="w-[full] h-[48px] flex justify-between items-center pl-[26px]  pt-[29px] pr-[40px] font-serif">
        {/* left section/logo */}
        <section className=" text-[36px]">
          <h1>INFO BAO</h1>
        </section>

        {/* right section /nav bar */}
        <section>
          <ul className="flex gap-[43px] text-[14px] ">
            <li className="hover:-translate-y-1"><Link href={'/'} >Home</Link></li>
            <li className="hover:-translate-y-1"><Link href={'/about'} >About Us</Link></li>
            <li className="hover:-translate-y-1"><Link href={'/blogs'} >Blogs</Link></li>
            <li className="hover:-translate-y-1"><Link href={'/cosmatic'} >Cosmetics Info</Link></li>
            <li className="hover:-translate-y-1"><Link href={'/contact'} >Contact</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Header;
