import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from 'axios';
import './css/homePage.scss'
import ShowDetails from "./components/showintentDetails";
import DataRow from "./components/dataRow";


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