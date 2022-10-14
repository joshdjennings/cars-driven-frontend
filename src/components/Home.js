import React from 'react'

const Home = () =>{
    return (
        <div className="header">
            <h1>Car & Driver Database</h1>
            <h2>This is a simple app that can help enter cars into a db.</h2>
            <p>Click the Cars button to toggle cars and their drivers that exist in the database.  You can mark the car as sold, indicating that the owner no longer drives that vehicle</p>
            <p>Click the New Car button to toggle a form to enter a new car and it's specs and add it to the database.</p> 
        
        </div>
    )
}
export default Home