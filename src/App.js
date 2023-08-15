import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import React, { useState } from 'react';
import {Steps, Button, message} from 'antd';

import Adhesive from './Components/Adhesive';
import Keywords from './Components/KeyWords';


const { Step } = Steps;

const steps = [
  {
    title: 'Create Adhesive',
    content: <Adhesive />,
  },
  {
    title: 'Create KeyWord',
    content: <Keywords />,
  },
];

const App = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div style={{display: "flex", justifyContent:"center"}}>
      <div className='main'>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Create Adhesive
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Save Adhesive
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>

    </div>

    </div>
    
  );
};

export default App;