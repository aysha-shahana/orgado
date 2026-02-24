import React, { useState } from 'react'

function useContact() {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [msg, setMsg] = useState("");
    
     const handleName = (e) => {
        setName (e.target.value);
    };

    const handlePhone = (e) => {
        setPhone (e.target.value);
    };

    const handleMail = (e) => {
        setEmail (e.target.value);
    }
    const handleMsg = (e) => {
        setMsg (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Phone:", phone);
        console.log("Email:" , email);
        console.log("Message:", msg);

        setName("");
        setPhone("");
        setEmail("");
        setMsg("");
    };

  return {
    name,
    phone,
    email,
    msg,
    handleName,
    handlePhone,
    handleMail,
    handleMsg,
    handleSubmit,
  };
}

export default useContact
