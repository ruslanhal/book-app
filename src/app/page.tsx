"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Book } from "@/types/book";
import { fetchBooks } from "@/utils/fetchBooks";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((error) => setError(error.message));
  }, [fetchBooks]);

  if (error) return <div>Error loading books: {error}</div>;
  if (!books.length) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 mb-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-24 mb-6">
        List of Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link key={book.id} href={`/${book.id}`} passHref>
            <div className="bg-white h-72 sm:h-60 rounded-lg p-4 shadow-md flex flex-col items-center transition duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={book.imageUrl}
                alt={`Cover of the book ${book.title}`}
                className="w-24 h-36 mb-4 object-cover sm:w-20 sm:h-30"
              />
              <div className="text-center">
                <p className="text-sm md:text-lg font-semibold">{book.title}</p>
                <p className="text-xs md:text-sm text-gray-600">
                  {book.author}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
