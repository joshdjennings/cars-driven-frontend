import {useState} from 'react'
function CreateForm({postCar}){
    const [formData, setFormData] = useState({
        make:'',
        model:'',
        year: '',
        driver:'',
        color: '',
        category: '',
        motor: '',
        fuel_type: '',
        transmission: '',
        drive: '',
        year_bought: '',
        driver_name: '',
        not_sold:false
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postCar(formData)
        setFormData({
            make:'',
            model:'',
            year: '',
            driver:'',
            color: '',
            category: '',
            motor: '',
            fuel_type: '',
            transmission: '',
            drive: '',
            year_bought: '',
            driver_name: ''
        })
    } 
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Driver:
                <input type="text" name="driver_name" value={formData.driver_name} onChange={handleChange}/>
            </label>
             <label>
                Make:
                <input type="text" name="make" value={formData.make} onChange={handleChange}/>
            </label>
            <label>
                Model:
                <input type="text" name="model" value={formData.model} onChange={handleChange}/>
            </label>
            <label>
                Year:
                <input type="number" name="year" value={formData.year} onChange={handleChange}/>
            </label>
            <label>
                Color:
                <input type="text" name="color" value={formData.color} onChange={handleChange}/>
            </label>
            <label>
                Category:
                <input type="text" name="category" value={formData.category} onChange={handleChange}/>
            </label>
            <label>
                Motor:
                <input type="text" name="motor" value={formData.motor} onChange={handleChange}/>
            </label>
                <label>
                Fuel Type:
                <input type="text" name="fuel_type" value={formData.fuel_type} onChange={handleChange}/>
            </label>
            <label>
                Transmission:
                <input type="text" name="transmission" value={formData.transmission} onChange={handleChange}/>
            </label>
            <label>
                Drive:
                <input type="text" name="drive" value={formData.drive} onChange={handleChange}/>
            </label>
            <label>
                Year Bought:
                <input type="number" name="year_bought" value={formData.year_bought} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateForm;
