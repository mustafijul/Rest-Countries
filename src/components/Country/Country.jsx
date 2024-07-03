import React, { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country);
    const {name, flags, area, population} = country;
    const [visited, setVisited] = useState(false)
    const handleVisit = () =>{
        setVisited(!visited)
    }
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <button onClick={handleVisit}>Visited</button>
            {visited ? 'I have visited this country' : 'Not visited'}
        </div>
    );
};

export default Country;