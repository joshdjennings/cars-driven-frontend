import {useState} from 'react'
function DriverForm({postDriver}){
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        quote: '',
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postDriver(formData)
        setFormData({
            name:'',
            age:'',
            quote: '',
        })
    } 
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Driver:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
             <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange}/>
            </label>
            <label>
                Favorite Quote:
                <input type="text" name="quote" value={formData.quote} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default DriverForm;
