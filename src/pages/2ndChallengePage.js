import useWindowDimensions from '../utils/useWindowDimensions';
import React, {useState } from "react";
import logo from "../assets/logo.png"




function SecondChallengePage() {
  const [state, setstate] = useState(0)
  const [headText, setHeadText] = useState("Make 100 customers Laugh")
  const [bodyText, setBodyText] = useState("-Creative jokes and hosting mini events")
  const {height, width} = useWindowDimensions()
  return (
    
    <div style={{backgroundColor:"#044343", height, width, display:'flex', justifyContent:"center", alignItems:"center" }}>
      <div style={{backgroundColor:"whitesmoke", height:"70%", width:"90%", padding:"10%"}} > 
      <div style={{backgroundColor:"whitesmoke", height:"30%",display:'flex', justifyContent:"center", alignItems:"center"}} >
          <img src={logo} alt="logo" style={{height:"100%"}} >
          </img>
        </div>
        <div>
          <h2 style={{color:"#044343"}}>Current Challenge : </h2>
          <h3>{headText}</h3>
          
        </div>
      
        <div>
          
           <form>
             <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}><p>{state}</p>
             <input type="button" value="done" onClick={()=>{
               
                  if(state<100){
                    setstate(state+10);
                  }
                  
                  else {
                    
                    setHeadText("Hold a charity Event");
                    setBodyText("");
                    setstate(state+10)
                    
                  }
                }}></input> </div>
           
             </form>   
             <p>2000XP    <progress value={state*10} max="2000"></progress></p>
             
              
        </div>
        <div>
        <h1 style={{color:"#044343"}}>level 2</h1>
          <p>Bonus for level 3 : 200$ bonus in the salary</p>
          <h1 style={{color:"#044343"}}>Motivational tips:</h1>
          <p>{bodyText}</p>
          
        </div>
      </div>
    </div>
  );
}

export default SecondChallengePage;

