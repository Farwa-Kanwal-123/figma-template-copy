import React from 'react'
import Image from 'next/image'

const Blogs = () => {
  return (
    <main>
      {/* Blog section for the landing page */}
      <div className="w-full h-[624px]">
        <div className="w-[90%] max-w-[993px] mt-24 mx-auto">
          <h1 className="text-center text-[36px] mb-16">Blogs</h1>
          <section className="flex justify-around">
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/first-square.png"
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/second-square.png"
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <Image
                src="/third-square.png"
                alt="skin problem picture"
                width={206}
                height={305}
                objectFit="cover"
              />
            </div>
          </section>
          <div className="mt-36 mb-48 text-center">
            <button className="px-12 py-2 border border-black">More</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blogs
