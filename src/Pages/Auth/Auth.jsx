import React, { useContext, useState } from 'react'
import classes from './Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Amazon from '../../assets/images/amazon_black.png'
import { auth } from '../../Utility/firebase1'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { DataContext } from "../../components/DataProvider/DataProvider"
import { Type } from '../../Utility/action.type'
import { ClipLoader } from 'react-spinners'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    singUp:false
  });
  
  const [{user}, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  console.log(user)
  const authHandler = async(e)=>{
    e.preventDefault();
    if(e.target.name == "signin"){
      setLoading({...loading, singIn:true});
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
        setLoading({...loading, singIn:false})
        navigate("/");
      }).catch((err)=>{
        console.log(err);
        setError(err.message);
        setLoading({...loading, singIn:false})
      })
    }
    else{
      setLoading({...loading, singUp:true});
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
        setLoading({...loading, singUp:false})
        navigate("/");
      }).catch((err)=>{
        console.log(err);
        setError(err.message);
        setLoading({...loading, singUp:false})
      })
    }
  }
  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img src={Amazon} alt="Amazon Logo" />
      </Link>
      <div className={classes.login__container}>
        <h1>Sing In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button type='submit' name='signin' onClick={authHandler} className={classes.login__signInButton}>
            {
              loading.singIn ? (<ClipLoader size={15}/>) : ("Sign In")
            }
          </button>
        </form>
        <p>
          By singing-in you agree to the AMAZON FAKE COLNE Condition of use & Sale.
          Please see our Privacy Notice, out Cookies Notice and out Interest-Based ADs Notice.
        </p>
        <button type='submit' name='signup' onClick={authHandler} className={classes.login__registerButton}>
          {
            loading.singUp ? (<ClipLoader size={15}/>) : ("Create your Amazon Account")
          }
        </button>
        {
          error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small>
        }
      </div>
    </section>
  )
}

export default Auth