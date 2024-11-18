"use client";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24 sm:mt-40">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        About Us
      </h1>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          Welcome to our book collection! Our goal is to provide an extensive
          and diverse selection of books that cater to all interests and
          preferences.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          We believe that books have the power to transform lives and connect
          people. From timeless classics to modern masterpieces, our collection
          is carefully curated to inspire and entertain.
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          Thank you for visiting our platform. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default About;
