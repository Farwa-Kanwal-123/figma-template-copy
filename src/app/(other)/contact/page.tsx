import React from "react";

const Contact = () => {
  return (
    <main className="w-full h-[1000px] font-serif">
      <section className="w-[90%] md:w-[1050px] h-[700px] border-t-[1.5px] border-b-[1.5px] border-black mx-auto mt-[126px]">
        <div className="w-full md:w-[790px] h-[212px] text-center mx-auto">
          <h1 className="text-[28px] mt-[90px] mb-[95px]">Contact</h1>
          <div>
            <ul className="flex flex-col md:flex-row justify-between text-sm space-y-2 md:space-y-0">
              <li>Phone number: +1234567890</li>
              <li>Location: South Los Angeles</li>
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col md:flex-row justify-between text-sm space-y-2 md:space-y-0">
              <li>Email: infobao-contact@gmail.com</li>
              <li>Language: Russian, English, Ukrainian, Spanish</li>
            </ul>
          </div>
          <div className="pt-[60px] md:pt-[281px] text-center">
            <p className="text-sm">
              We hope you like this site and you will come back again!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
