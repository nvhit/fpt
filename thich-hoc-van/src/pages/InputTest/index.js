import React from 'react';
import Intro from '../../containers/InputTest';
  

const InputTest = () => (
  <div className="content">
    <div className="container-fluid">
        <div className="header"><h4>Kiểm tra đầu vào</h4></div>
        <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4 className="title">Test</h4> 
            </div>
            <div className="content">
                <Intro/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InputTest;