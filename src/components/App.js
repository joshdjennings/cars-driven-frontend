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

  // Gets one car
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
      body: JSON.stringify({...car, sold:false})
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
    setShowCarForm(current => !current);
  };
  const toggleDriverForm = () => {
    setShowDriverForm(current => !current);
  };

  const toggleShowCars = () => {
    setShowCars(current => !current);
  };
  const toggleShowDrivers = () => {
    setShowDrivers(current => !current);
  };



  return (
    <div className="App">
      {/* {console.log(cars)}
      {console.log(drivers)} */}
      <div className="header">
        <h1>What cars have I owned?</h1>
        <h2>Have you ever been asked, "What was your favorite car?"</h2>
        <h2>Have you every struggled to remember which car you had and when?</h2> 
        <ul>Here you can enter and keep track of cars you've driven and/or no longer drive anymore.</ul>
      </div>

      <body>
        <div className='buttons'>
          <button onClick={toggleShowCars}>Cars</button>
           {showCars && <>{cars.map(c => <Card car={c} patchCar={patchCar} handleDelete={handleDelete} key={`${c.id}${c.name}`}/>)}</>}
            
          <button onClick={toggleCarForm}>New Car Form</button>
           {showCarForm && <CreateForm postCar={postCar}/>}
        </div>
         
        <div>
          <button onClick={toggleShowDrivers}>Drivers</button>
            {showDrivers && <>{drivers.map(d => <Driver driver={d} handleDeleteDriver={handleDeleteDriver} key={`${d.id}${d.name}`}/>)}</>}
          
          <button onClick={toggleDriverForm}>New Driver Form</button>
            {showDriverForm && <DriverForm postDriver={postDriver}/>}
        </div>
      </body>
      
    </div> 
  );  
}

export default App;
