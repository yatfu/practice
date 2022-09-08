import React from 'react';
import ReactDOM from 'react-dom/client'

const BookList = () => { // contains books
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <section>
      <Image />
      <h2><Title /></h2>
      <h1>By: {<Author />}</h1>
    </section>
  )
}

const Title = () => 'Carrie Soto Is Back: A Novel'

const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg' alt='img'/>
)

const Author = () => 'Taylor Jenkins Reid'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)