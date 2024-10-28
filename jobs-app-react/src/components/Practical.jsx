import React from 'react';  
import { Link } from 'react-router-dom';  

const Practical = () => {  
  const myObject = { id: 1, name: 'Item 1', description: 'This is Item 1' };  

  return (  
    <div>  
      <h1>Home Page</h1>  
      {/* Pass the object via state */}  
      <Link to="/detail" state={{ myObject }}>   
        Go to Detail Page  
      </Link>  
    </div>  
  );  
};  

export default Practical;