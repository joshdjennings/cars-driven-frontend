import {useState} from 'react'
function DriverForm({postDriver}){
    const [driverFormData, setDriverFormData] = useState({
        name:'',
        age:'',
        quote: '',
    })
    const handleChange = (e) => {
        setDriverFormData({...driverFormData, [e.target.name]:e.target.value})
    }

    const handleSubmitDriver = (e) => {
        e.preventDefault()
        postDriver(driverFormData)
        setDriverFormData({
            name:'',
            age:'',
            quote: '',
        })
    } 
    
    return(
        <form onSubmit={handleSubmitDriver}>
            <label>
                Driver:
                <input type="text" name="name" value={driverFormData.name} onChange={handleChange}/>
            </label>
             <label>
                Age:
                <input type="number" name="age" value={driverFormData.age} onChange={handleChange}/>
            </label>
            <label>
                Favorite Quote:
                <input type="text" name="quote" value={driverFormData.quote} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default DriverForm;
