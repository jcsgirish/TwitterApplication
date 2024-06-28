
import React, { useState , useEffect} from "react";
import { BsTwitterX } from "react-icons/bs";
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from "../../Firebase/Firebase";
import Googlebutton from "react-google-button"
import { Link } from "react-router-dom";
import "./signinpage.styles.css"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
    const [name,setName]=useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,Error,User] = useCreateUserWithEmailAndPassword(auth);
        const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

        useEffect(() => {
            if (user || User) {
                navigate('/login');
            }
        }, [user, User, navigate]);
    
        useEffect(() => {
            if (error || Error) {
                console.log(error || Error);
            }
        }, [error, Error]);

        const HandleSubmit = async (e) => {
            e.preventDefault();
            try {
              await createUserWithEmailAndPassword(email, password);
          
              const user = { name, email };
              console.log('Sending user data to server:', user);
          
              const response = await axios.post('http://localhost:5000/register', user);
              console.log('Server response:', response.data);
          
              setEmail('');
              setPassword('');
              setName('');
            } catch (error) {
              console.error('Error registering user:', error);
            }
          };
          
 
   const Handlename=(e)=>
     setName(e.target.value)
  

    const Handleemail=(e)=>{
        setEmail(e.target.value)
    
    }
    
    const HandlePassword=(e)=>{
        setPassword(e.target.value)
    }

    



  return (
 <div className="SignIn-Container">
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


        <input className="form-input"type="text" placeholder="Enter Name" onChange={Handlename} value={name} required></input> 
        <input className="form-input"type="email" placeholder="Enter email" onChange={Handleemail} value={email} required></input>
        <input className="form-input" type="password"  placeholder="Password" onChange={HandlePassword} value={password} required></input>
        <button type="submit" className="signin-btn">Create account</button>     
        </form>
        <div className="termslink" >
        By signing up,you agree to the<a href="#"> Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
        </div>
      
        <div className="Link-tag">Already have an account ?</div>
        <Link className="login-linktag" to = '/login'>Login</Link>
       
    </div>
    {/* <div className="container-img">
        <img src={twitpic} alt="X"/>
    </div> */}
    <div className="Xicon">
    <div><BsTwitterX /></div>
    </div>
    {/* {error && <p >{error.message}</p>}
    {Error && <p>{Error.message}</p>}
    {user && <p style={{color:"white"}}>{user.message}</p>}
    {User && <p style={{color:"white"}}>{User.message}</p>} */}
</div>
  )
}

export default SignIn