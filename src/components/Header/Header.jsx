import React from 'react'
import LowerHeader from './LowerHeader'
import classes from './Header.module.css'
import Amazon from '../../assets/images/amazon.png'
import Flag from '../../assets/images/us-flag.png'
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* log section */}
          <div className={classes.logo__container}>
            <div>
              <a href="/">
                <img src={Amazon} alt="amazon logo" />
              </a>
            </div>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder='search product' />
            <IoIosSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order__container}>
            <div>
              <div className={classes.language}>
                <img src={Flag} alt="us-flag" />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </div>
            </div>
            <a href="">
              <div>
                <p>sign in</p>
                <span>Accont & Lists</span>
              </div>
            </a>
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  )
}

export default Header