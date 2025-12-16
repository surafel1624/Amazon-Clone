import React from 'react'
import classes from './Header.module.css'
import { MdMenu } from "react-icons/md";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
        <ul>
            <li>
                <MdMenu />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Coustomer Service</li>
            <li>Registery</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader