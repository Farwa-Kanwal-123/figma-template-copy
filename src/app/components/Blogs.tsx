// import React from 'react'
// import Image from 'next/image'

// const Blogs = () => {
//   return (
//     <main>
//       {/* this component made for blog section in landind page */}
//     <div className='w-full h-[623.3px]'>
//       <div className='w-[993px] mt-[96px] ml-[130px]'>
//         <h1 className='ml-[465.7px] text-[36px] mb-[64px]'>Blogs</h1>
//         <section className='flex justify-around
//         '>
//         <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/first-square.png"}
//                 alt="skin problem picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//         <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/second-square.png"}
//                 alt="skin problem picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//         <div className="hover:-translate-y-1 ">
//               <Image
//                 src={"/third-square.png"}
//                 alt="skin problem picture"
//                 width={206}
//                 height={305}
//                 objectFit="cover"
//               />
//             </div>
//         </section>
//              <div className='mt-[155px] ml-[450px] mb-[197.97px]'>
//               <button className='px-[50px] py-[10px] border-[1px] border-black '>More</button>
//              </div>
           
//       </div>
//     </div>
//     </main>
//   )
// }

// export default Blogs


import React from 'react'
import Image from 'next/image'

const Blogs = () => {
  return (
    <main>
      {/* This component made for the blog section on the landing page */}
      <div className='w-full h-[623.3px]'>
        <div className='w-full max-w-screen-xl mx-auto mt-[96px] px-4'>
          <h1 className='text-center text-[36px] mb-[64px]'>Blogs</h1>

          <section className='flex flex-col sm:flex-row sm:justify-between sm:gap-6'>
            {/* Blog Image 1 */}
            <div className="hover:-translate-y-1 mb-8 sm:mb-0 sm:w-1/3">
              <Image
                src={"/first-square.png"}
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>

            {/* Blog Image 2 */}
            <div className="hover:-translate-y-1 mb-8 sm:mb-0 sm:w-1/3">
              <Image
                src={"/second-square.png"}
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>

            {/* Blog Image 3 */}
            <div className="hover:-translate-y-1 mb-8 sm:mb-0 sm:w-1/3">
              <Image
                src={"/third-square.png"}
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
          </section>

          {/* Button */}
          <div className='mt-[155px] text-center'>
            <button className='px-[50px] py-[10px] border-[1px] border-black'>
              More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blogs
