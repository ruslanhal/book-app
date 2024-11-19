"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Book } from "@/types/book";
import { fetchBookById } from "@/utils/fetchBooks";

const BookDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      fetchBookById(id)
        .then(setBook)
        .catch((error) => console.error("Error fetching book details:", error));
    }
  }, [id]);

  if (!book) return <div>Loading...</div>;
  if (!id) return <div>Book ID not found!</div>;

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="bg-white rounded-lg p-6 shadow-md max-w-lg w-full text-center">
        <img
          src={book.imageUrl}
          alt={`Cover of the book ${book.title}`}
          className="w-32 h-auto mx-auto mb-4 rounded sm:w-48"
        />
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{book.title}</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4">{book.author}</p>
        <p className="text-sm sm:text-base text-gray-600">{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
