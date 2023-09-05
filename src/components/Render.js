import React, { useState } from "react";

const Render = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};



const R1=()=>{
    const[age,setage]=useState(false);

    const Eligible=()=>{
      setage(true);
    }

    const notEligible=()=>{
        setage(false);
    }
  
    return(

        <div>
            
        </div>
    )

}


 export default function R2(){
    return(
        <Render/>
    )
}