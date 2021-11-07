
import useWindowDimensions from '../utils/useWindowDimensions';
import logo from "../assets/logo.png"


function LoginPage() {
  const {height, width} = useWindowDimensions()
  return (
    <div style={{backgroundColor:"#044343", height, width, display:'flex', justifyContent:"center", alignItems:"center" }}>
      <div style={{backgroundColor:"whitesmoke", height:height*0.8, width:width*0.9}} > 
        <div style={{backgroundColor:"whitesmoke", height:"30%",display:'flex', justifyContent:"center", alignItems:"center"}} >
          <img src={logo} alt="logo" style={{height:"100%"}} >
          </img>
        </div>
        <div  >
          <div style={{alignItems:"center",justifyContent:"center"}}>
            <h1 style={{textAlign:"center"}}> Login </h1>
          </div>
          <form style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center" }} >
            <input type="username" placeholder="Please username here" ></input>
            <input type="password" placeholder="Please password here" ></input>
            <select name='Role'
                  style={{ width: '200px' }}>
            <option value='manager'>
              Manager
            </option>
            <option value='employee'>
              Employee
            </option>
            </select>
            <input type="button"  value="login" onClick={()=>{}} />
          </form>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
