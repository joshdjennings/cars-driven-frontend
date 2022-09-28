import {useState, useEffect} from 'react'
import Card from './Card'
import CreateForm from './CreateForm'
import Driver from './Driver'
import DriverForm from './DriverForm'

import '../App.css';

function App() {
  const [cars, setCars] = useState([])
  const [drivers, setDrivers] = useState([])

  useEffect(()=> {
  //Gets cars and drivers
    fetch('http://localhost:9292/cars')
    .then(res => res.json())
    .then(setCars)
    
    fetch('http://localhost:9292/drivers')
    .then(res => res.json())
    .then(setDrivers)
  },[])

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
      setCars([newDriver,...drivers])
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


  return (
    <div className="App">
      {/* {console.log(cars)}
      {console.log(drivers)} */}
      <div>
      <CreateForm postCar={postCar}/>
      {cars.map(c => <Card car={c} patchCar={patchCar} handleDelete={handleDelete} key={`${c.id}${c.name}`}/>)}
      </div> 
      <div>
      <DriverForm postDriver={postDriver}/>
      {drivers.map(d => <Driver driver={d} handleDeleteDriver={handleDeleteDriver} key={`${d.id}${d.name}`}/>)}
      </div> 

    </div> 
  );
}

export default App;
