import { Book } from "@/types/book";

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch("/books.json", { cache: "no-cache" });
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
};

export const fetchBookById = async (id: string): Promise<Book | null> => {
  const response = await fetch("/books.json");
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const books: Book[] = await response.json();
  return books.find((book) => book.id.toString() === id) || null;
};
