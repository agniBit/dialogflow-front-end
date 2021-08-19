import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from 'axios';
import './css/homePage.scss'




function DataRow(data: any) {
  const intent = data.intent;
  console.log(intent);
  return (
    <div className='intent_row' onClick={() => {
      data.clickHandler(intent);
      data.showMoreDetails(true);
    }}>
      <div className='intent_display_name row'><p>{intent.displayName}</p></div>
    </div>
  )
}

function ShowDetails(data: any) {
  const intent = data.intentData;
  return (
    <div className='details'>
      <div className='close'>
        <img className='close_icon' src='/close_icon.png' alt='close' onClick={() => data.showMoreDetails(false)} />
      </div>
      <div className='details_container'>
        <h3>Display Name :- </h3>
        <div className='intent_display_name row'><h3>{intent.displayName}</h3></div>
        <h5>Intent name:- </h5>
        <div className='intent_name row'><p>{intent.name}</p></div>
        <h5>Action :- </h5>
        <div className='action row'><p>{intent.action}</p></div>
        <h5>Root Followup Intent Name :- </h5>
        <div className='folloup_name row'><p>{intent.rootFollowupIntentName}</p></div>
        <h5>Parent Followup Intent Name :- </h5>
        <div className='parent_follow_up row'><p>{intent.parentFollowupIntentName}</p></div>
        <h5>Output Contexts:- </h5>
        <div className='context_display row'>
          {
            (intent.outputContexts) ? intent.outputContexts.map((context: any) => {
              return (
                <div className='context'>
                  <p>{context.name}</p>
                  <p>{JSON.stringify(context.parameters.fields)}</p>
                </div>
              )
            })
            : <p>None</p>}
        </div>
        <h5>Input context names :- </h5>
        <div className='input_context row'>
          {
            (intent.inputContextNames) ?
              intent.inputContextNames.map((inputContext:any) => {
                return (
                  <div>{inputContext}</div>
                )
              })
              : <div>None</div>
          }
        </div>
      </div>
    </div>
  )
}

export default function Home(props: { history: any; }) {
  const [intentData, setIntentData] = useState(Array);
  const [displayIntentData, setDisplayIntent] = useState(Object);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  useEffect(() => {
    var config: AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:9876/api/getIntentsList',
    };
    axios(config).then(function (response: any) {
      setIntentData(response.data)
      console.log(JSON.stringify(response.data));
    })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [setIntentData]);


  return (
    <div className='main_container'>
      <div className='data'>
        <h3>Intent List</h3>
        <div className='data_container'>
          <div className='row_container'>
            {intentData.map((data, i) => {
              return (
                <DataRow key={i} intent={data} history={props.history} clickHandler={setDisplayIntent} showMoreDetails={setShowMoreDetails}/>
              )
            })}
          </div>
        </div>
      </div>
      { (showMoreDetails)? <ShowDetails intentData={displayIntentData} showMoreDetails={setShowMoreDetails}/> : <span className='hidden'></span> }
    </div>
  );
}