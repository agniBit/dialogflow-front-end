export default function ShowDetails(data: any) {
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