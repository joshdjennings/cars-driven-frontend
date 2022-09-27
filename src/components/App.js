import {useState, useEffect} from 'react'
import Card from './Card'
import CreateForm from './CreateForm'
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
//patches car
  const patchCar = (car) => {
    fetch(`http://localhost:9292/cars/${car.id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...car})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCars(cars.map(c => {
        if(car.id === data.id){
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
  return (
    <div className="App">
      {console.log(cars)}

      <div>
      <CreateForm postCar={postCar}/>
      {cars.map(c => <Card car={c} patchCar={patchCar} handleDelete={handleDelete} key={`${c.id}${c.name}`}/>)}
      </div> 
    </div> 
  );
}

export default App;
