import React, { useState,useEffect } from "react";
import twitpic from '../../Assets/Images/image.jpg'
import { BsTwitterX } from "react-icons/bs";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../Firebase/Firebase'
import "./Loginpage.styles.css"
import { Link } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Googlebutton from "react-google-button";
import { useNavigate } from "react-router-dom";


const Loginpage =()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const Navigate = useNavigate()

    const[signInWithEmailAndPassword,error,user] = useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle, User, Error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user || User) {
            Navigate('/');
        }
    }, [user, User, Navigate]);



    const HandleSubmit =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
        console.log("logged")
        setEmail('')
        setPassword('')
        setName('')
    }
  


    return(
        <div className="LogIn-Container">
            <div className="form-container">
            {/* <div className="twittericon">{<BsTwitterX/>}</div> */}
                <h1>Happening now</h1>
                <h2>Join today.</h2>
                
                <form onSubmit={HandleSubmit}>
                <div
                   className="googleform-input"
                   onClick={(()=>signInWithGoogle())}>
                   <Googlebutton/>
                   </div>

                <input type="text" className="form-input" placeholder="Enter Name"  onChange={((e)=>setName(e.target.value))} value={name} required ></input>
                <input type="email" className="form-input" placeholder="Enter email"  onChange={((e)=>setEmail(e.target.value))} value={email} required ></input>
                <input type="password" className="form-input" placeholder="Password"  onChange={((e)=>setPassword(e.target.value))} value={password} required ></input>
                <button type="submit" className="login-btn">Log in</button>
                </form>
                <div className="Link-tag">Don't have an account ?</div>
            <Link className="login-linktag" to = '/signup'>Sign up</Link>

            </div>
            {/* <div className="container-img">
                <img src={twitpic} alt="X"/>
            </div> */}
             <div className="Xicon">
      <div>
        <BsTwitterX />
      </div>
    </div>
    {/* {error && <p>{error.message}</p>}
    {Error && <p>{Error.message}</p>}
    {user && <p style={{color:"white"}}>{user.message}</p>}
    {User && <p style={{color:"white"}}>{User.message}</p>} */}
           
</div>
   
    )
}
export default Loginpage