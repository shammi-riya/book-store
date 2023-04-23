import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Book = () => {
    const {books} = useLoaderData()
    console.log(books);
    return (
        <div>
            Book
        </div>
    );
};

export default Book;