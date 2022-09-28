function Card({car, patchCar, handleDelete}){
  console.log(car)
    return(
        <div>
          <h3>Driver: {car.driver_name}</h3>
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
          <p>Year Sold: {car.year_sold}</p>

          {car.active? <button onClick={()=> patchCar(car)}>Deactivate Car</button> : <h3>Car is dead</h3>}
          <button onClick={() => handleDelete(car.id)}>Delete Car</button>
        </div> 
      )
  }
  
  export default Card;
  