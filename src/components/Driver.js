function Driver({driver, handleDeleteDriver}){
    // console.log(driver)
      return(
          <div className="card">
            <h3>Driver: {driver.name}</h3>
            <p>Age: {driver.age}</p>
            <p>Number of Cars owned: {driver.num_of_cars}</p>
            {/* <p>Cars: {driver.cars}</p> */}
            <p>Favorite Quote: {driver.quote}</p>
  
            <button onClick={() => handleDeleteDriver(driver.id)}>Delete Driver</button>
          </div> 
        )
    }
    
    export default Driver;