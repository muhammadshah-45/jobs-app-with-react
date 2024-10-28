import React from 'react';  
import { useLocation } from 'react-router-dom';  

const Detail = () => {  
  const location = useLocation();  
  console.log(location)
  const { myObject } = location.state || {}; // Use optional chaining to avoid errors  

  return (  
    <div>  
      <h1>Detail Page</h1>  
      {myObject ? (  
        <div>  
          <p>ID: {myObject.id}</p>   
          <p>Name: {myObject.name}</p>  
          <p>Description: {myObject.description}</p>  
        </div>  
      ) : (  
        <p>No data available</p>  
      )}  
    </div>  
  );  
};  

export default Detail;