import React from 'react'
import Image from 'next/image'

const Blogs = () => {
  return (
    <main>
      {/* this component made for blog section in landind page */}
    <div className='w-full h-[623.3px]'>
      <div className='w-[993px] mt-[96px] ml-[130px]'>
        <h1 className='ml-[465.7px] text-[36px] mb-[64px]'>Blogs</h1>
        <section className='flex justify-around
        '>
        <div className="hover:-translate-y-1 ">
              <Image
                src={"/first-square.png"}
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
        <div className="hover:-translate-y-1 ">
              <Image
                src={"/second-square.png"}
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
        <div className="hover:-translate-y-1 ">
              <Image
                src={"/third-square.png"}
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
        </section>
             <div className='mt-[155px] ml-[450px] mb-[197.97px]'>
              <button className='px-[50px] py-[10px] border-[1px] border-black '>More</button>
             </div>
           
      </div>
    </div>
    </main>
  )
}

export default Blogs