import React from 'react';
import ReactDOM from 'react-dom/client';

import Book from './Book'
import {data} from './data'

import './index.css';

// VARS SETUP



//const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const BookList = () => { // contains books
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book}/>
      })}
    </section>
  )
}
// PROPS: image, title, author
// note: children prop accesses in between of html


/** stopped using these parts from tutorial ---
const Title = () => 'Carrie Soto Is Back: A Novel'
const Image = () => (<img src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg' alt='img'/>)
const Author = () => 'Taylor Jenkins Reid' **/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)