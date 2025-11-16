import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import BookAPI from '../../api/books/BookAPI';

export default function ViewBook() {
  const { bookId } = useParams();
  const [ book, setBook ] = useState(null);
  const getBookDetails = async (bookId) => {
    try {
      const bookDetails = await BookAPI.fetchBookById(bookId);
      setBook(bookDetails);
      console.log('Book Details:', bookDetails);
    } catch (error) {
      console.error('Failed to fetch book details:', error);
    }
  }

  useEffect(() => {
    getBookDetails(bookId);
  }, [bookId]);
  return (
    <div>
        <h2>View Book Details</h2>
        <p>Book ID: {bookId}</p>
        {book ? (
            <div>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Price: {book.price}</p>
                <p>Rating: {book.rating}</p>
            </div>
        ) : (
            <p>Loading book details...</p>
        )}
    </div>
  )
}
