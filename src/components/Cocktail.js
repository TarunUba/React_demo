import React from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ image, name, id, info, glass, category }) {
  console.log(category);
  return (
    <section className='cocktail grow'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </section>
  )
}
