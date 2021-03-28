import React, { useState, useEffect } from 'react';

import Message from "./Message";
import './App.css';
import { db } from './firebase';
import firebase from 'firebase';




function App() {
   const [input,setInput]=useState('');
   const [messages,setMessages]=useState([{username:'Hi',message:'there'},{username:'si',message:'hi'}]); 
   const [username,setUsername]=useState('');
 

   useEffect(()=>{

    db.collection('message')
    .orderBy('timestamp',)
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()))
    })


   },[])

  useEffect(()=>{
  setUsername(prompt('Please enter your name'))
  },[])
  
   

   const sendMessage=(event)=>{
     event.preventDefault();


     db.collection('message').add({
       message:input,
       username:username, 
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
     })
    
     setInput('');

   }

  return (
    
    <div className="App">
      <img className="image" src="https://pbs.twimg.com/profile_images/1332100213167824902/jaXq9Kvl_400x400.jpg"/>
      <h1>Welcome {username}  </h1>
      <h2>Great to have you here </h2>

      <form className="form">

      

        
      <input class='input' placeholder='Enter your message......' value={input} onChange={event=>setInput(event.target.value)}/>
      <button disabled={!input} class='send-button' type='submit' onClick={sendMessage}>Send Messages</button>
       
      </form>

      {
        messages.map(message => (
        <Message  username={username} message={message} /> 
         
        ))
      }


      
    </div>
  );
}


export default App;
