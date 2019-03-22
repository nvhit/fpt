import React from 'react';
import ButtonStart from '../Atoms/Buttons/ButtonStart.js';

const IntroInputTest = ({onClick, message}) => {
  return (
    <div className="row">
      
      <h5>{ message }</h5>
      <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6" >
        <div className="col-md-6">
            <ButtonStart onClick={onClick}/>
            <button className="btn btn-info btn-fill btn-wd" onClick={onClick} >Bắt đầu</button>
        </div>
      </div>
    </div>
  )
}


export default IntroInputTest;