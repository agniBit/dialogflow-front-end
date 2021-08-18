import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from 'axios';
import './css/homePage.scss'

function DataRow(data: any) {
  const intent = data.intent;
  console.log(intent);
  function handleClick(e:any) {
    data.history.push(`/intent?id=${intent.name}`, { intentData: e })
  }

  return (
    <div className='intent_row' onClick={() => handleClick(intent)}>
      {/* <div className='intent_name'><p>{intent.name}</p></div> */}
      <div className='intent_display_name row'><p>{intent.displayName}</p></div>
      {/* <div className='action row'><p>{intent.action}</p></div> */}
      {/* <div className='folloup_name row'><p>{intent.rootFollowupIntentName}</p></div> */}
      {/* <div className='parent_follow_up row'><p>{intent.parentFollowupIntentName}</p></div> */}
      {/* <div className='context_display row'><p>{JSON.stringify(intent.outputContexts)}</p></div> */}
      {/* <div className='inputContext row'><p>{JSON.stringify(intent.inputContextNames)}</p></div> */}
    </div>
  )
}

export default function Home(props: { history: any; }) {
  const [intentData, setIntentData] = useState(Array);

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
  }, []);

  return (
    <div className='main_container'>
      <div className='data_container'>
        <div className='row_container'>
          {intentData.map((data, i) => {
            return (
              <DataRow key={i} intent={data} history={props.history}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}