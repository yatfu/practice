import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// VARS SETUP
const books = [
  {
    id:1,
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/A1Bw-ZraGJL._AC_US218_..jpg',
    title: 'Carrie Soto Is Back: A Novel',
    author: 'Taylor Jenkins Reid'
  },
  {
    id:2,
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81B3NH2-s8L._AC_US218_..jpg',
    title: 'One True Loves: A Novel',
    author: 'Taylor Jenkins Reid' 
  }
]


//const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const BookList = () => { // contains books
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}/>
      })}
    </section>
  )
}
// PROPS: image, title, author
// note: children prop accesses in between of html
const Book = (props) => {
  const {image, title, author} = props
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