export default function DataRow(data: any) {
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