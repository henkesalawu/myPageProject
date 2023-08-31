import React, { useState } from 'react';
import './Hobby.css';

function Hobby() {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);


  const addLeftHover=() => {
    console.log('entered');
    setLeftHover(true);
  }
  const removeLeftHover = () => {
    setLeftHover(false);
  }
  const removeRightHover = () => {
    setRightHover(false);
  }
  const addRightHover = () => {
    setRightHover(true)
  }

  
return (
    <>
    <div className='hobby'>
    <div class="hobby_container">
            <div class={leftHover ? "split left hover-left": "split left"} onMouseEnter={addLeftHover} onMouseLeave={removeLeftHover}>
                <a href="/hobby/musicdance" class="hobby_btn">Music & Dance</a>
            </div>
            <div class={rightHover ? "split right hover-right": "split right"} onMouseEnter={addRightHover} onMouseLeave={removeRightHover}>
                <a href="/hobby/other" class="hobby_btn" >Other</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hobby;
