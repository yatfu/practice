import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// VARS SETUP

const firstBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg',
  title: 'Carrie Soto Is Back: A Novel',
  author: 'Taylor Jenkins Reid'
}

const secondBook = {
  image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41P1TdVaj+L.jpg',
  title: 'One True Loves: A Novel',
  author: 'Taylor Jenkins Reid' 
}

const BookList = () => { // contains books
  return (
    <section className='booklist'>
      <Book image={firstBook.image} title={firstBook.title} author={firstBook.author}/>
      <Book image={secondBook.image} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

const Book = (props) => {
  return (
    <section className='book'>
      <img src={props.image} alt='img'/>
      <h2>{props.title}</h2>
      <h1>By: {props.author}</h1>
    </section>
  )
}

/** stopped using these parts from tutorial ---
const Title = () => 'Carrie Soto Is Back: A Novel'
const Image = () => (<img src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg' alt='img'/>)
const Author = () => 'Taylor Jenkins Reid' **/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)