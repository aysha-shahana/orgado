import React, { useEffect, useState } from 'react'
import "../style/login.css"

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPass] = useState("");
  const[isLoggedIn, setLoggedin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("mail");
    if (user) setLoggedin(true);
  }, []);

  const login = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    const userdata = {email,password};
    localStorage.setItem("mail",JSON.stringify(userdata));
    setLoggedin(true);
  }
  const logout = () => {
    localStorage.removeItem("mail");
    setEmail("");
    setPass("");
    setLoggedin(false);
  }; 

  return (
    <div>
      {isLoggedIn ? (
  <>
  </>   
   ):(
      <form>
        <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} className='name' style={{marginTop:"130px"}}  placeholder='Enter Your Email' /> <br />
        <input  onChange={(e) => setPass(e.target.value)} value={password} type="password" style={{marginTop:"25px"}}  className='name' placeholder='Password (at least 6 characters)' /> <br />
        <input type="checkbox" className='rmbr-me' /> Remember me  <br />


        <button type='submit' onClick={login} id='loginbtn' className='btn' routerLink="/">
          Login Now
          </button>  <br />


        <p id='register'>Not Registerd? <a href="/signup" className='sgnuplink'>Sign up</a></p>
      </form>
      )}
    </div>
  )
}

export default Login
