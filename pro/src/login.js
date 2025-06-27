import { Link} from "react-router-dom";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
   
    // JSON.parse(sessionStorage.getItem('details'));
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [login,setLogin]=useState("");
 
    useEffect(()=>{
        const details=[
            {sno:"1",name:"Maha",Password:"12345678",place:"Tenkasi",age:"23"},
            {sno:"2",name:"Lakshmi",Password:"12345678",place:"Tirunelveli",age:"24"},
            {sno:"3",name:"Ruhi",Password:"12345678",place:"Mumbai",age:"22"},
            {sno:"4",name:"Dhiya",Password:"12345678",place:"Mumbai",age:"25"},
            {sno:"5",name:"Rohini",Password:"12345678",place:"Delhi",age:"27"},
            {sno:"6",name:"Riya",Password:"12345678",place:"Delhi",age:"21"},
            

            ]
            sessionStorage.setItem('details',JSON.stringify(details));
        });
    
   useEffect(()=>{
    if(Object.keys(error).length===0){
        setLogin(true);
    }
    },[error]);
  const navigate=useNavigate();

    const valid = (e) => {
        console.log(username, password);

        let error = {}
        if (username === "") {
            error.username = "name required"
         }
         else if (username.length < 5) {
            error.username = "name must be more than 5 char"
        }
      
        if (password === "") {
            error.password = "password required"
        }
        else if (password.length < 3) {
            error.password = "password must be more than 6 char"
        }

    //    else{
    //         //  navigate('/dashboard');
    //    }
       return error; 
    }
    
    
    const handleSubmit=(e)=>{
        console.log(username,password);
        setError(valid(e));
        if(login && username!=='' && password!==''){
            console.log(login);
            var submitName=JSON.parse(sessionStorage.getItem('details'));
            var getname=(submitName.find(({name,Password})=>name===username && Password===password));
            if(getname!==undefined){
                sessionStorage.setItem("username",username,"password",password);
                navigate('/home');
            }
            else if(username!==undefined && password!==undefined)
            {
                setUsername("");
                alert("Enter the valid Name");
                setPassword("");
                alert("Enter the valid password");
            }        
        }
    }
   return (
        <>
         
         <div className="container-fluid">
         <div className="row background">
            <div className="container form">
                <div className="header">
                    <h1>Login</h1>
                </div>

                <form id="form">
                    <div className="form-group">

                        <i className="fa fa-user"></i>
                        <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={valid}/>
                        <br/><span style={{ color: "red" }}>{error.username}</span><br/>
                    </div>

                    <div className="form-group">
                        <i className="fa fa-lock"></i>
                        <input type="text" placeholder="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={valid}/>
                        <br/><span style={{ color: "red" }}>{error.password}</span><br/>
                    </div>
                    <button type="button" value='submit' onClick={() => handleSubmit()}>Login</button>
                    {/* <Link to="/register"> Register now</Link> */}
                    <h6 style={{padding:"40px"}}>Don't have an account?<Link to="/register"> Register now</Link></h6>
                </form>
            </div>
            </div>
            </div>
        </>
    )
}
export default Login;