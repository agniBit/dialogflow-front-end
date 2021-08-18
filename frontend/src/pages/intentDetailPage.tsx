import React, { useEffect, useState } from "react";

export default function Intent(props: { location: { state: { intentData: any; }; }; }) {
  const intentData = props.location.state.intentData;
  return (
    <div>
      {JSON.stringify(intentData)}
    </div>
  )
}