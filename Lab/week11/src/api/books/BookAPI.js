import axiosInstance from '../AxiosInstance';

const BookAPI = {
    fetchBooks: async () => {
        try {
            const response =  await axiosInstance.get('/books');
            if(response.data.status) return response.data.data;
            else throw new Error(response.data.message);
        } catch (error) {
            throw new Error('Error fetching books: ' + error.message);   
        }  
    },
    fetchBookById: async (bookId) => {
        try {
            const response = await axiosInstance.get(`/book/${bookId}`);
            if(response.data.status) return response.data.data;
            else throw new Error(response.data.message);
        } catch (error) {
            throw new Error('Error fetching book: ' + error.message);
        }
    },
    addBook: async (bookData) => {
        try {
            const response = await axiosInstance.post('/books', bookData);
            if(response.data.status) return response.data.data;
            else throw new Error(response.data.message);
        } catch (error) {
            throw new Error('Error adding book: ' + error.message);
        }
    },
    updateBook: async (bookId, bookData) => {
        try {
            const response = await axiosInstance.put(`/book/${bookId}`, bookData);
            if(response.data.status) return response.data.data;
            else throw new Error(response.data.message);
        } catch (error) {
            throw new Error('Error updating book: ' + error.message);
        }
    },
    deleteBook: async (bookId) => {
        try {
            const response = await axiosInstance.delete(`/book/${bookId}`);
            if(response.data.status) return response.data.data;
            else throw new Error(response.data.message);
        } catch (error) {
            throw new Error('Error deleting book: ' + error.message);
        }
    }
}

export default BookAPI;