import useWindowDimensions from '../utils/useWindowDimensions';
import React, {useState } from "react";
import logo from "../assets/logo.png"


function ChallengePage() {
  const [state, setstate] = useState(0)
  const {height, width} = useWindowDimensions()
  
  return (
    
    
    <div style={{backgroundColor:"#044343", height, width, display:'flex', justifyContent:"center", alignItems:"center" }}>
      <div style={{backgroundColor:"whitesmoke", height:"70%", width:"90%", padding:"10%"}} > 
      <div style={{backgroundColor:"whitesmoke", height:"30%",display:'flex', justifyContent:"center", alignItems:"center"}} >
          <img src={logo} alt="logo" style={{height:"100%"}} >
          </img>
        </div>
        <div>
          <h2>Current Challenge : </h2>
          <h3>-Today,Collect 1000$</h3>
          
        </div>
      
        <div>
          
           <form>
             <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}><p>{state}</p>
             <input type="button" value="done" onClick={()=>{
               
                  if(state<=900){
                    setstate(state+100);
                    
                  }
                  else {
                    alert("Challenge completed!");
                    
                  }
                }}></input> </div>
           
             </form>   
             <progress value={state} max="1000">
</progress>
             
              
        </div>
        <div>
          <h1>level 1</h1>
          <p>Bonus for level 2 : Dinner Party</p>
          <h1>Motivational tips:</h1>
          <p>-Try to synchronize your work together as a team, keep a smily face and enjoy the good work</p>
        </div>
      </div>
    </div>
  );
}

export default ChallengePage;

