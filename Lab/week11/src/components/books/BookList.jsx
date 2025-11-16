import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookAPI from '../../api/books/BookAPI'
import { useNavigate } from 'react-router-dom'

export default function BookList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([])
    const fetchBooks = async () => {
       try {
        const bookList = await BookAPI.fetchBooks();
        setBooks(bookList);
       } catch (error) {
        console.error('Failed to fetch books:', error);
       }
    }
    useEffect(() => {
        fetchBooks();
    }, [])

    const viewBook = (bookId) => {
        // Implement view book logic here
        // alert(`View book with ID: ${bookId}`);
        navigate(`/view-book/${bookId}`);
    }

    const editBook = (book) => {
        // Implement edit book logic here
        alert(`Edit book: ${JSON.stringify(book)}`);
    }

    const deleteBook = async (bookId) => {
        try {
            await BookAPI.deleteBook(bookId);
            fetchBooks(); // Refresh the book list after deletion
        } catch (error) {
            console.error('Failed to delete book:', error);
        }
    }

  return (
    <div>
        <h3>Books List</h3>
        <table border="1" cellPadding="5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book._id}>
                        <td>{book._id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td>{book.rating}</td>
                        <td>
                            <button onClick={ e => viewBook(book._id)}>View</button>
                            <button onClick={ e => editBook(book)}>Edit</button>
                            <button onClick={ e => deleteBook(book._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
