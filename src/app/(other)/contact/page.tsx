import React from "react";

const Contact = () => {
  return (
    <main className="w-full h-[1000px] font-serif">
      <section className="w-[1050px] h-[700px] border-black border-y-[1.5px] ml-[125px] mt-[126px]">
        <div className="w-[790px] h-[212px] text-center ml-[122px]">
          <h1 className="text-[28px] mt-[90px] mb-[95px]">Contact</h1>
          <div>
            <ul className="flex justify-between ">
              <li className="mb-[31px]">Phone number: +1234567890 </li>
              <li className="mb-[31px]">Location: South Los Angeles </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between ">
              <li>Email: infobao-contact@gmail.com</li>
              <li>Language: Russian, English, Ukrainian, Spanish.</li>
            </ul>
          </div>
          <div className="pt-[281px] text-center">
            <p>
              We hope you like this site and you want will back on this site!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
