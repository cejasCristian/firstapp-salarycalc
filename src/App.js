import React, { Fragment, useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Message from './Components/Message';
import Result from './Components/Result';
import Spinner from './Components/Spinner';

function App() {

  //Def state
  const [hours, saveHours] = useState (0);
  const [hourly, saveHourly] = useState (0);
  const [antiquity, saveAntiquity] = useState ('');
  const [total, saveTotal] = useState (0);
  const [loading, saveLoading] = useState (false);

  let component;

  if(loading) {
    component = <Spinner />
  } else if(total === 0){
    component = <Message />
  } else {
    component = <Result 
                  total={total}
                  hours={hours}
                  hourly={hourly}
                  antiquity={antiquity}
                />
  }


  return (
    <Fragment>
      <Header 
        titulo = "Salary calculator"
      />
      <div className = "container">
        <Form 
          hours = {hours}
          saveHours = {saveHours}
          hourly = {hourly}
          saveHourly = {saveHourly}
          antiquity = {antiquity}
          saveAntiquity = {saveAntiquity}
          total = {total}
          saveTotal = {saveTotal}
          saveLoading = {saveLoading}
        />
        <div className = "message">
          {component}
        </div>
      </div>
    
    </Fragment>
  );
}

export default App;
