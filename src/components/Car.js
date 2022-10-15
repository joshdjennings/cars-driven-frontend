function Car({car, patchCar, handleDelete}){
  console.log(car)
    return(
        <div className="card">
          <p>Driver: {car.driver_id}</p>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Year Bought: {car.year_bought}</p>

          {car.not_sold? <button onClick={()=> patchCar(car)}>Mark Car as SOLD</button> : <h2>Car was sold</h2>}
          <button onClick={() => handleDelete(car.id)}>Delete Car</button>
        </div> 
      )
  }
  
  export default Car;
  