import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => { // contains books
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const image = 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg'
  const title = 'Carrie Soto Is Back: A Novel'
  const author = 'Taylor Jenkins Reid'
  return (
    <section className='book'>
      <img src={image} alt='img'/>
      <h2>{title}</h2>
      <h1>By: {author}</h1>
    </section>
  )
}

/** stopped using these parts from tutorial ---
const Title = () => 'Carrie Soto Is Back: A Novel'
const Image = () => (<img src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg' alt='img'/>)
const Author = () => 'Taylor Jenkins Reid' **/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)