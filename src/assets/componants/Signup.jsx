import React, { useEffect, useState } from 'react'
import "../style/signup.css"
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function Signup() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname]= useState("");
  const[mail,setmail] = useState("");
  const[num,setNum] = useState(0);
  const[Passw,setPassw] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect (() => {
    const client = localStorage.getItem("user");
    if (client) setIsSignedUp(true);
  }, []);

  const Signup = () => {
    if (Fname === "" || Lname === "" || mail === "" || num === "" || Passw === ""){
      alert("Please enter details");
      return;
    }
    const clientData = {Fname,Lname,mail,num,Passw};
    localStorage.setItem("user", JSON.stringify(clientData));
    setIsSignedUp(true);
  };

  return (
    <div>
      {isSignedUp ? (
      <>
      </>
        ):(
      <>
    
      <div className='font'>
      <form>
        <div className='signupdata'>
        <input type="text" onChange={(e) => setFname(e.target.value)} value={Fname} placeholder='First Name' />
        <input type="text" onChange={(e) => setLname(e.target.value)}
              value={Lname} placeholder='Last Name' /> <br />
        <input type="email" onChange={(e) => setmail(e.target.value)}
              value={mail} placeholder='Email' />
        <input type="number" onChange={(e) => setNum(e.target.value)}
              value={num} placeholder='Phone Number' /> <br />
        <input type="password" onChange={(e) => setPassw(e.target.value)}
              value={Passw} placeholder='Password (at least 6 characters)' /> 
       <select>
        <option value="gender">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="transgender">Transgender</option>
       </select>
       </div>
      <br />
       <input type="checkbox" className='check' /> Accept the terms and Privacy Policy
 <br />
       <button type='button' onClick={Signup} className='rgstrnow' routerLink="/">Register Now</button>
      
      <div id='LogIn'>
        <span> Already have an account?</span>
        <span><a href="/" className='sgnuplink'>Log In</a></span>
      </div>
        </form>
    </div>
        </>
        )}
    </div>
  );
 }
export default Signup
