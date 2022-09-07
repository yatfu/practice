import React from 'react';
import ReactDOM from 'react-dom'

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
      <Title />
    </section>
  )
}

const Title = () => <h1>Carrie Soto Is Back: A Novel </h1>

const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51W5Kgv0MgL._AC_SX184_.jpg' alt='img'>title</img>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, document.getElementById('root'))