import React from 'react'

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

export default Book