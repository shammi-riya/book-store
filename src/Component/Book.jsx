import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Books from './Books';
import LoadingSpeaner from './LoadingSpeaner';

const Book = () => {

    const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <LoadingSpeaner></LoadingSpeaner>
    }
  
    const {books} = useLoaderData()
    console.log(books);

    return (
        <div className='my-container'>
      <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
        {books.map(book =><Books
        book={book}
         key={book.isbn13}

        ></Books> )}
      </div>
    </div>
    );
};

export default Book;