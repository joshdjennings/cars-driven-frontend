import {useState, useEffect} from 'react'
import Card from './Card'
import CreateForm from './CreateForm'
import Driver from './Driver'
import DriverForm from './DriverForm'

import '../App.css';

function App() {
  const [cars, setCars] = useState([])
  const [drivers, setDrivers] = useState([])
  const [showCarForm, setShowCarForm] = useState(false)
  const [showDriverForm, setShowDriverForm] = useState(false)
  const [showCars, setShowCars] = useState(false)
  const [showDrivers, setShowDrivers] = useState(false)

  useEffect(()=> {
  //Gets cars and drivers
    fetch('http://localhost:9292/cars')
    .then(res => res.json())
    .then(setCars)
    
    fetch('http://localhost:9292/drivers')
    .then(res => res.json())
    .then(setDrivers)
  },[])

  const getCar = (id) => {
    fetch(`http://localhost:9292/cars${id}`)
    .then(res => res.json())
    .then(car => console.log(car))
  }

  //Creates a Car 
  const postCar = (car) => {
    fetch('http://localhost:9292/cars',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(res => res.json())
    .then(newCar => {
      setCars([newCar,...cars])
    })
  }

  //Creates a Driver 
  const postDriver = (driver) => {
    fetch('http://localhost:9292/drivers',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(driver)
    })
    .then(res => res.json())
    .then(newDriver => {
      setDrivers([newDriver,...drivers])
    })
  }
  
//patches car
  const patchCar = (car) => {
    fetch(`http://localhost:9292/cars/${car.id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...car, active:false})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCars(cars.map(c => {
        if(c.id === data.id){
          return data
        } else {
          return c
        }
      }))
    })
  } 
//Deletes car
  const handleDelete = (id) => {
    fetch(`http://localhost:9292/cars/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(() => 
      setCars(cars.filter(c => c.id !== id))
    )
  }

//Deletes driver
  const handleDeleteDriver = (id) => {
    fetch(`http://localhost:9292/drivers/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(() => 
      setDrivers(drivers.filter(d => d.id !== id))
    )
  }
  const toggleCarForm = () => {
    // 👇️ passed function to setState
    setShowCarForm(current => !current);
  };
  const toggleDriverForm = () => {
    // 👇️ passed function to setState
    setShowDriverForm(current => !current);
  };

  const toggleShowCars = () => {
    // 👇️ passed function to setState
    setShowCars(current => !current);
  };
  const toggleShowDrivers = () => {
    // 👇️ passed function to setState
    setShowDrivers(current => !current);
  };



  return (
    // create state for viewing drivers vs cars
    <div className="App">
      {/* {console.log(cars)}
      {console.log(drivers)} */}
      <div className="header">
        <h2>Cars site</h2>
        <p>Here you can enter and keep track of cars you've driven and/or no longer drive anymore.</p>
      </div>

      <body>
        <div>
          <button onClick={toggleCarForm}>Enter a New Car</button>
          {showCarForm && <CreateForm postCar={postCar}/>}
        </div>
        
        <div>
        <button onClick={toggleDriverForm}>Enter a New Driver</button>
          {showDriverForm && <DriverForm postDriver={postDriver}/>}
        </div> 

        <div>
          <button onClick={toggleShowCars}>Show Cars</button>
          {showCars && <>{cars.map(c => <Card car={c} patchCar={patchCar} handleDelete={handleDelete} key={`${c.id}${c.name}`}/>)}</>}
        </div>
        
        <div>
        <button onClick={toggleShowDrivers}>Show Drivers</button>
          {showDrivers && <>{drivers.map(d => <Driver driver={d} handleDeleteDriver={handleDeleteDriver} key={`${d.id}${d.name}`}/>)}</>}
        </div>
      </body>
      

    </div> 
  );  
}

export default App;
