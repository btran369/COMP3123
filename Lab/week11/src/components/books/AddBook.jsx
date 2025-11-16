import React, { useState } from 'react'
import BookAPI from '../../api/books/BookAPI';

const INITIAL_BOOK = {
        title: '',
        author: '',
        price: 0,
        rating: 0
    }
export default function AddBook() {
    const [book, setBook] = useState(INITIAL_BOOK);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement book submission logic here
        console.log('Book to be added:', book);
        BookAPI.addBook(book)
            .then(response => {
                console.log('Book added successfully:', response.data);
                setBook(INITIAL_BOOK); // Reset form after successful submission
            })
            .catch(error => {
                console.error('There was an error adding the book!', error);
            });
    }

  return (
    <div>
       <h2>Add new Book</h2>
       <form onSubmit={handleSubmit}>
          <div>
             <label>Title: </label>
             <input type="text" name="title" value={book.title} onChange={handleInputChange}/>
          </div>
          <div>
             <label>Author: </label>
             <input type="text" name="author" value={book.author} onChange={handleInputChange}/>
          </div>
          <div>
             <label>Price: </label>
             <input type="number" name="price" value={book.price} onChange={handleInputChange}/>
          </div>
          <div>
             <label>Rating: </label>
             <input type="number" name="rating" step="0.1" min="0" max="5" value={book.rating} onChange={handleInputChange}/>
          </div>
          <button type="submit">Add Book</button>
       </form>  
    </div>
  )
}
