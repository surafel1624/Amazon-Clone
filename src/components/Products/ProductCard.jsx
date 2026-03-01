import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import {Link} from 'react-router-dom';

function ProductCard({product, flex, renderDescription}) {
    const {image, title, id, rating, price, description} = product;
  return (
    <div className={`${classes.card__container} ${flex?classes.product__flexed : ''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="Product image" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDescription && <div style={{maxWidth: "750px"}}>{description}</div>}
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating?.rate || 0} precision={0.1}/>
                {/* rating counter */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>
            <button className={classes.button}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard