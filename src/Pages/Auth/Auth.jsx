import React from 'react'
import classes from './Auth.module.css'
import { Link } from 'react-router-dom'
import Amazon from '../../assets/images/amazon_black.png'

function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img src={Amazon} alt="Amazon Logo" />
      </Link>
      <div className={classes.login__container}>
        <h1>Sing In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__signInButton}>Sign In</button>
        </form>
        <p>
          By singing-in you agree to the AMAZON FAKE COLNE Condition of use & Sale.
          Please see our Privacy Notice, out Cookies Notice and out Interest-Based ADs Notice.
        </p>
        <button className={classes.login__registerButton}>Create your Amazon Account</button>
      </div>
    </section>
  )
}

export default Auth