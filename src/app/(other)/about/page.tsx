import React from "react";

const About = () => {
  return (
    <main className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-screen-lg mx-auto border-t-2 border-b-2 border-gray-400 font-serif">
        <div className="grid gap-8 md:gap-16 mb-8 md:mb-16 pt-8 md:pt-16 lg:pt-20 px-4 md:px-16 lg:px-24">
          <div>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">About Us</h1>
          </div>
          <div>
            <p className="text-center text-sm md:text-base lg:text-lg leading-relaxed">
              On the main page, you can read about us, but here you can read more about our project and what we aim to achieve. Many women want to look beautiful but often feel unsure. Some may not know where to start, and others may lack makeup application skills. That's why we plan to publish various makeup tutorials, which can be very useful.
              <br /><br />
              Additionally, you’ll find information about different brands. A bit about myself: my name is Julia, and I’m eighteen years old. You might wonder how a young girl can discuss skincare problems, but I’ve dealt with acne, scars, and body acne myself. This site aims to provide you with valuable cosmetic insights. However, remember, everyone’s skin is unique. Always test new products on your arm to avoid potential allergies. Achieving clear, beautiful skin is possible with the right care!
            </p>
          </div>
          <div className="text-center text-sm md:text-base lg:text-lg font-semibold">We love you!</div>
        </div>
      </div>
    </main>
  );
};

export default About;
