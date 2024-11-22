import React from 'react';
import Layout from '@theme/Layout';
import { BookGrid } from '../components/BooksFeatures/BookGrid';
import styles from './books.module.css';

const books = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    link: 'https://example.com/book1',
    reviewSlug: 'midnight-library-review'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    link: 'https://example.com/book2',
    reviewSlug: 'leadership-is-mindset'
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',
    link: 'https://example.com/book3',
    reviewSlug: 'midnight-library-review'
  }
];

export default function Books(): JSX.Element {
  return (
    <Layout
      title="Book Reviews"
      description="Discover my personal book reviews and recommendations"
    >
      <main className={styles.booksContainer}>
        <div className={styles.header}>
          <h1>My Book Reviews</h1>
          <p>Discover the books I've read and my thoughts about them</p>
        </div>
        <BookGrid books={books} />
      </main>
    </Layout>
  );
}