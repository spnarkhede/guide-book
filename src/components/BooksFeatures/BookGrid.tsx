import React from 'react';
import { BookCard, BookProps } from './BookCard';
import styles from './BookGrid.module.css';

interface BookGridProps {
  books: BookProps[];
}

export function BookGrid({ books }: BookGridProps) {
  return (
    <div className={styles.bookGrid}>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
}