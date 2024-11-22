import React from 'react';
import Link from '@docusaurus/Link';
import styles from './BookCard.module.css';

export interface BookProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  link: string;
  reviewSlug?: string;
}

export function BookCard({ title, author, cover, link, reviewSlug }: BookProps) {
  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCover}>
        <img src={cover} alt={`${title} cover`} />
      </div>
      <div className={styles.bookInfo}>
        <h3>{title}</h3>
        <p className={styles.author}>by {author}</p>
        <div className={styles.actions}>
          <a href={link} className={styles.buyLink} target="_blank" rel="noopener noreferrer">
            Buy Book
          </a>
          <Link 
            to={reviewSlug ? `/blog/${reviewSlug}` : '#'} 
            className={styles.reviewLink}
          >
            Read Review
          </Link>
        </div>
      </div>
    </div>
  );
}