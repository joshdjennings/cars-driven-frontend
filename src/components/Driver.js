function Driver({driver, handleDeleteDriver}){
    console.log(driver)
      return(
          <div>
            <h3>Driver: {driver.name}</h3>
            <p>Age: {driver.age}</p>
            <p>Favorite Quote: {driver.quote}</p>
  
            <button onClick={() => handleDeleteDriver(driver.id)}>Delete Driver</button>
          </div> 
        )
    }
    
    export default Driver;