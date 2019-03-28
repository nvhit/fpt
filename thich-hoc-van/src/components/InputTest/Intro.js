import React from 'react';
//import ButtonStart from '../Atoms/Buttons/ButtonStart.js';

const IntroInputTest = ({onClick, message}) => {
  return (
    <div className="row">
      
     { message }
      <div className="col-lg-2" >
            <button className="btn btn-info btn-fill btn-wd" onClick={onClick} >Bắt đầu</button>
      </div>
    </div>
  )
}


export default IntroInputTest;