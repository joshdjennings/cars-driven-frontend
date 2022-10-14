import {useState} from 'react'
function CreateForm({postCar}){
    const [formData, setFormData] = useState({
        make:'',
        model:'',
        year: '',
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
            year_bought: '',
            driver_name: ''
        })
    } 
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Driver:
                <input type="select" name="driver_name" value={formData.driver_name} onChange={handleChange}/>
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
                Year Bought:
                <input type="number" name="year_bought" value={formData.year_bought} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateForm;
