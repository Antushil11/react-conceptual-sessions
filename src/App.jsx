// import React, { useState } from 'react';
import { Suspense, useEffect, useState } from 'react';
import Users from './Components/Users';

const App = () => {



  const [users,setUsers] = useState([])
  const [count,setCount] = useState(0)

  console.log(users)

  const handleCount =() => {
    setCount((count+1))
  }
  

  

    useEffect(() => {

      fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then(res => res.json())
      .then(data => setUsers((data)));

    },[count])
  
  
  return (
    <>
    

    <h1>hello {count}</h1>


    <button onClick={handleCount} className='bg-amber-800 border-amber-300'>Increase</button>
    

      
    </>
  );
};

export default App;