import React, { useEffect } from 'react'
import './Notes.css'
import { useState } from 'react';
function Notes() {

  const [Text, setText] = useState('')

  const UpdateText = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('TextArea', newText);
  };

  useEffect(() => {
    const savedText = localStorage.getItem('TextArea');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  return (
    <div className='textarea'>
      <p className='disabledText'><b style={{fontSize:"28px"}}>All Notes</b><br /><br />This is how I am going to learn MERN Stack in next 3 months.</p>
      <textarea className='text' value={Text} onChange={UpdateText}></textarea>
    </div>
  )
}

export default Notes;