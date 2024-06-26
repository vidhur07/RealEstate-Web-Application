import React from 'react'
import { Link } from 'react-router-dom'

function Pgitem(props) {
  return (
    <>
        <li className='pgs__item'>
            <Link className='pgs__item__link' to={props.path}>
                <figure className='pgs__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Img' className='pgs__item__img'>

                    </img>
                </figure>
                <div className='pgs__item__info'>
                    <h5 className='pgs__item__text'>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default Pgitem
