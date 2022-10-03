function Card({car, patchCar, handleDelete}){
  console.log(car)
    return(
        <div className="card">
          <p>Driver: {car.driver_name}</p>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Color: {car.color}</p>
          <p>Category: {car.category}</p>
          <p>Motor: {car.motor}</p>
          <p>Fuel Type: {car.fuel_type}</p>
          <p>Transmission: {car.transmission}</p>
          <p>Drive: {car.drive}</p>
          <p>Year Bought: {car.year_bought}</p>

          {car.sold? <button onClick={()=> patchCar(car)}>Mark Car as SOLD</button> : <h2>Car was sold</h2>}
          <button onClick={() => handleDelete(car.id)}>Delete Car</button>
        </div> 
      )
  }
  
  export default Card;
  