import React from 'react';
import { Link } from 'react-router-dom';

function Plateitem(props) {
  return (
    <>
        <li className="plates__item">
            <Link className='plates__item__link' to={props.path}>
                <figure className='plates__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Img' className='plates__item__img'>

                    </img>
                </figure>
                <div className='plates__item__info'>
                    <h5 className='plates__item__text'>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default Plateitem