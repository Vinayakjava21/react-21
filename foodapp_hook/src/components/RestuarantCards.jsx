
const RestuarantCards=(props)=>{
    const {resData} = props;
  return (
    <div className="rest-card">
      <img className="img" src={resData.imageUrl}></img>
      {/* <div> */}
           

      <h3>{resData.name}</h3>
      <h3>{resData.deliveryTime}</h3>
      
      <h3>{resData.cuisine.join(",")}</h3>
      <h3>{resData.rating}</h3>
      
      {/* </div> */}

    </div>
  )
}

export default RestuarantCards;