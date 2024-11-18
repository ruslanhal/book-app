"use client";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24 sm:mt-40">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Contact Us
      </h1>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          We'd love to hear from you! Whether you have a question about our book
          collection, suggestions, or just want to say hello, feel free to reach
          out.
        </p>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg mb-2">
            <strong>Email:</strong> contact@bookcollection.com
          </p>
          <p className="text-base sm:text-lg mb-2">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="text-base sm:text-lg">
            <strong>Address:</strong> 123 Book Lane, Reading City, World
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
