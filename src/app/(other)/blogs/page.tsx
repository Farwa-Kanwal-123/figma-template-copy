import Image from "next/image";

const Blog = () => {
  return (
    <main className="w-full h-[2100px] font-serif mb-20">
      <section>
        <h1 className="mt-16 mb-16 text-center text-2xl">Blogs</h1>
      </section>

      {/* start main sections */}
      <section className="w-[1150px] mx-auto h-[1896px]">
        {/* section 1 Face */}
        <section>
          <div className="w-full h-[610px] mt-12 flex flex-col border-t border-[#837F7F] mx-auto">
            <h2 className="text-center mt-12 text-xl">Face</h2>
            <div className="flex justify-between mx-24 mt-12 mb-20">
              <div className="hover:-translate-y-1">
                <Image
                  src="/Cleanser-box.png"
                  alt="skin problem picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src="/patches-box.png"
                  alt="skin problem picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src="/Masks-box.png"
                  alt="skin problem picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center mb-16">
              <button className="px-12 py-2 border border-black text-sm">
                More
              </button>
            </div>
          </div>
        </section>

        {/* section 2 Body */}
        <section className="w-full h-[610px] border-t border-[#837F7F] mb-24 ">
          <div className="mt-12 flex flex-col">
            <div className="text-center mt-12 text-xl">Body</div>
            <div className="flex justify-between mx-24 mt-12 mb-20">
              <div className="hover:-translate-y-1">
                <Image
                  src="/Body-scrab.png"
                  alt="Body-scrab picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src="/Body-lotion.png"
                  alt="body-lotion picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src="/Body-oil.png"
                  alt="Body-oil picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center">
              <button className="px-12 py-2 border border-black text-sm">
                More
              </button>
            </div>
          </div>
        </section>

        {/* section 3 Hair */}
        <section className="w-full h-[610px] border-t border-[#837F7F]">
          <div className="mt-12 flex flex-col">
            <div className="text-center mt-12 text-xl">Hair</div>
            <div className="flex justify-between mx-24 mt-12 mb-20">
              <div className="hover:-translate-y-1">
                <Image
                  src="/hairbrush-box.png"
                  alt="hairbrush picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src="/Hair-Styling.png"
                  alt="Hair-Styling picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
              <div className="hover:-translate-y-1">
                <Image
                  src="/Hair-split ends.png"
                  alt="Hair-split ends picture"
                  width={251}
                  height={315}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center mb-16">
              <button className="px-12 py-2 border border-black text-sm">
                More
              </button>
            </div>
          </div>
        </section>

        <hr className="w-[1150px] mt-12 border-t border-[#837F7F]" />
      </section>
    </main>
  );
};

export default Blog;
